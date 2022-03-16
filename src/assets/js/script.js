var didScroll;
var handleScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight;

(function($) {

    $(document).ready(function () 
    {
        navbarHeight = $('header').outerHeight();
        
        $('#mySidenav li.menu-item-has-children, .menu-vertical-slide .menu-main li.menu-item-has-children').unbind('click').on('click', function(e){
            $(this).find('>ul').slideToggle('fast');
            $(this).toggleClass('opened');
            e.stopPropagation();
        });

        $('header.menu-vertical-slide').unbind('mouseleave').on('mouseleave', function() {
            $(this).find('li.menu-item-has-children ul').hide();
            $(this).find('li.menu-item-has-children').removeClass('opened');
        });


        if($('header').hasClass('menu-fixed') && !$('header').hasClass('no-opacity'))
        {
            $(window).unbind('scroll').on('scroll', function(event)
            { 
                didScroll = true;
                clearTimeout(handleScroll);

                handleScroll = setTimeout(function() 
                {
                    if (didScroll) {
                        hasScrolled();
                        didScroll = false;
                    }
                    
                }, 150);
            });
        }


        function hasScrolled() 
        {
            var st = $(this).scrollTop();
            
            if(Math.abs(lastScrollTop - st) <= delta) {
                return;
            }
            
            if (st > lastScrollTop && st > navbarHeight) {
                $('header').removeClass('nav-down').addClass('nav-up');
            }
            else {
                $('header').removeClass('nav-up').addClass('nav-down');
            }

            if(st > $('#slider').height() / 2 || st>100) {
                $('header').addClass('highlight');
            }
            else {
                $('header').removeClass('highlight');
            }
            
            lastScrollTop = st;
        }

        function SetupMasonry() 
        {
            $('.grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true,
                horizontalOrder: true
            });
        }


        $('header button').unbind('click').on('click', function (e) {
            $('header button').toggleClass('collapsed');
            $('body').toggleClass('nav-open');
        });
        
        $('#overlay-menu').unbind('click').on('click', function (e) {
            $('header button').removeClass('collapsed');
            $('body').removeClass('nav-open');
        });

        if( $('.wallpaper').length > 0 )
        {
            $(window).unbind('scroll').on('scroll', function() 
            {
                var scroll = $(window).scrollTop();
                $(".zoom img").css({
                    transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
                });

                var opc = 1 - ( scroll / 300 );

                if( opc >= -1 && opc <= 2 ) {
                    $('.overlay-text, .carousel-control-prev, .carousel-control-next, .carousel-indicators, .slide-no-image').css({'opacity': opc });
                }

                if( opc < 0.5 )
                    $('.slider .box').addClass('hide-after');
                else
                    $('.slider .box').removeClass('hide-after');
            });
        }

        $('.single-video .video-holder .video-play-button').unbind().on('click', function()
        {
            var holder = $(this).closest('.video-holder');
            var player = holder.find('.box-player');
            var v1 = player.find('video');
            
            holder.find('.video-play-button').css('display', 'none');
            player.show().css('z-index', 3);

            if(v1.length>0) {
                v1[0].play();
            }
        });

        $('.slider .fa-play').unbind().on('click', function()
        {
            var id1 = $(this).closest('.box').attr('data-id');
            var box1 = $(this).closest('.box');
            var player = box1.find('.box-player');
            box1.find('.fa-play, .video-play-button-small, .text').hide();
            player.show().css('z-index', 2);

            $.ajax({
                type: 'post',
                data: { ajax: true, video_post_id: id1},
                
                success: function(res){
                    
                    player.html((res));
                    var v1 = box1.find('video');

                    if(v1.length>0) {
                        v1[0].play();
                    }
                }
            });
        });

        var m1;

        if( $('header').hasClass('menu-minimal') )
        {
            m1 =  '<li class="search-btn">';
            m1 += '<a class="animate brd">';
            m1 += '<i class="fa fa-search mr-auto" aria-hidden="true"></i>';
            m1 += '<span class="desc animate">' + $('#lblSearch').val() + '</span>';
            m1 += '</a>';
            m1 += '</li>';

            $('.menu-main>ul').append(m1);
        }

        if( $('header').hasClass('menu-vertical-slide') )
        {
            m1 =  '<li class="search-btn fa fa-search">';
            m1 += '<a>' + $('#lblSearch').val() + '</a>';
            m1 += '</li>';

            $('.menu-main>ul').append(m1);
        }


        $('.search-btn, .fa-search-mobile').unbind().on('click', function() {
            $('#search').show();
        });

        $('#close-search').unbind().on('click', function() {
            $('#search').hide();
        });

        $('#search input[type=text]').unbind('keyup').on('keyup', function()
        {
            var str = $(this).val();
            var objS = $('#search .search-content');
            objS.html('');

            $.ajax({
                type: 'post',
                data: { ajax: 1, search: str },

                success: function(res)
                {
                    var s = '';
                    objS.html('');
                    res = JSON.parse(res);

                    if( res.length > 0 ) 
                    {
                        for(var i in res)
                        {
                            s = '<div class="col-lg-4 col-md-6 col-12 pl-5 pr-4">';
                                s += '<div class="row">';
                                    s += '<div class="col-3 px-0">';
                                        s += '<a target="_blank" href="' + res[i].link + '"><img height="81" src="'+ res[i].image +'"></a>';
                                    s += '</div>';
                                    s += '<div class="col-9 pl-3">';
                                        s += '<h3 class="title-h"><a target="_blank" class="title-a" href="' + res[i].link + '">' + res[i].title + '</a></h3>';
                                        s += '<span class="time">'+ res[i].date +'</span>';
                                    s += '</div>';
                                s += '</div>';
                            s += '</div>';

                            objS.append(s);
                        }
                    }
                }
            });
            
        });


        if( $('.grid').length > 0 ) 
        {
            SetupMasonry();
            setTimeout( function() { SetupMasonry(); }, 12000 );
        }

        if( $('.col-left-equal, .col-right-equal').length > 0 ) 
        {
            $('.col-left-equal, .col-right-equal').theiaStickySidebar({
                disableOnResponsiveLayouts: true,
                minWidth: 992
            });
        }
    });

    setInterval(function(){
        $('.animated-circles').toggleClass('animated');
    }, 6000);

    String.prototype.toFaDigit = function() {
        return this.replace(/\d+/g, function(t) {
            for (var e = "", i = 0, n = t.length; i < n; i++)
                e += String.fromCharCode(t.charCodeAt(i) + 1728);
            return e
        })
    }

    $(".num-digit").each(function() {
        $(this).html($(this)[0].innerHTML.toFaDigit())
    })

})( jQuery );