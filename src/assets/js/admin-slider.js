(function($) {
    
    $(document).ready(function() 
    {

        $('.header_logo_upload').unbind('click').on('click', function(e) 
        {
            e.preventDefault();
            var txt = $(this).parent().find('input[type=text]');

            // wp is a global wordpress variable
            var customUploader = wp.media({
                title: 'Custom Image',
                button: { text: 'Upload Image' },
                multiple: false
            })
            .unbind('select')
            .on('select', function() {
                var attachment = customUploader.state().get('selection').first().toJSON();
                txt.val(attachment.url);
            })
            .open();
        });

        $('.video-upload').unbind().bind('click', function(e) 
        {
            e.preventDefault();
            var customUploader = wp.media({
                title: 'Upload Video File',
                button: { text: 'Upload Video' },
                multiple: false,
            })
            .unbind('select')
            .on('select', function() {
                var attachment = customUploader.state().get('selection').first().toJSON();
                $('.meta-video').val(attachment.url);
            })
            .open();
        });

        $('.video-demo-field input[type=checkbox]').unbind().on('change', function() 
        {
            var ch1 = $('#holder-video');

            if($(this).prop('checked') === true) {
                ch1.show();
            }
            else {
                ch1.hide();
            }
        });

        $('.video-type').unbind().on('change', function()
        {
            $('#holder-video, #holder-embed').hide();

            if($(this).val() === 'internal') {
                $('#holder-video').show();
            }
            else {
                $('#holder-embed').show();
            }
        });


        $('.video-type').change();


        $('#setting-menu li').unbind().on('click', function() 
        {
            var index1 = $(this).index();
            $('.modern-setting .section-setting, .modern-setting table').hide();
            var tbl = $('.section-setting table:eq('+ index1 + ')');
            tbl.closest('.section-setting').show();
            tbl.show();

            $('#setting-menu li').removeClass('active');
            $(this).addClass('active');

            var btn = $('.setting-form input[name=_wp_http_referer]');
            
            if(btn.length>0) {
                btn.attr('value', btn.attr('value') + '#!' + $(this).attr('id'));
            }
        });

        
        if( $('#setting-menu li').length > 0 )
        {
            var menuId = location.hash.substring( location.hash.lastIndexOf('!') + 1 );

            if( menuId !== '' ) {
                $('#setting-menu #' + menuId ).click();
            }
        }

        $('.del-trans').unbind().on('click', function() {
            $(this).closest('tr').remove();
        });


        var ChangeSliderStatus = function() 
        {
            var sm = $('#link-setting-slider-main');
            var ss = $('#link-setting-slider-second');

            sm.find('a').hide();
            ss.find('a').hide();
            
            if( $('#setting_slider_main').val() === 'on' ) {
                sm.find('a').show();
            }
            else {
                sm.find('p').show();
            }

            if( $('#setting_slider_second').val() === 'on' ) {
                ss.find('a').show();
            }
            else {
                ss.find('p').show();
            }
        };

        $('#setting_slider_main, #setting_slider_second').unbind().on('change', function() {
            ChangeSliderStatus();
        });

        ChangeSliderStatus();

        var ChangeSlideType = function() 
        {
            var obj = $('#modern_slider_type').length > 0 ? $('#modern_slider_type') : $('#modern_slider_second_type');
            var id1 = obj.val();
            var lbl = obj.find("option:selected").text();

            $('.item').hide();
            $('#' + id1).show();
            $('.slider-title span').html(lbl);
        };

        var ChangeSlideBox = function() 
        {
            var v1 = $('.slider-form-plugin select:first').val();
            var obj = $('.item:visible .box[data-box=' + v1 + ']');
            
            $('.box').removeClass('active-box-1');
            obj.addClass('active-box-1');
            HighlightEffect(obj);
        };

        var HighlightEffect = function (obj)
        {
            obj.removeClass('active-box-1').addClass('active-box-2');
            setTimeout(function(){obj.removeClass('active-box-2').addClass('active-box-1');
            setTimeout(function(){obj.removeClass('active-box-1').addClass('active-box-2');
            setTimeout(function(){obj.removeClass('active-box-2').addClass('active-box-1');
            setTimeout(function(){obj.removeClass('active-box-1').addClass('active-box-2');
            setTimeout(function() {
                $('.box').removeClass('active-box-1');
                obj.removeClass('active-box-2').addClass('active-box-1');
            },300);},300);},300);},300);},300);
        };


        if($('.plugin-slider').length > 0)
        {
            var id1 = $('.plugin-slider').attr('data-value');

            $('.item').hide();
            $('#' + id1).show();

            $('.box').unbind().on('click', function() {
                var v1 = $(this).attr('data-box');
                var obj = $('.slider-form-plugin select');

                obj.find('option').removeAttr('selected');
                obj.find('option[value=' + v1 + ']').attr('selected', 'selected');
                
                ChangeSlideBox();
            });
        }


        $('.slider-form-plugin select:first').unbind().on('change', ChangeSlideBox);

        if( $('.slider-form-plugin select' ).length>0 ) {
            ChangeSlideBox();
        }

        var ChangeSliderTypeSetting = function(id1) 
        {
            var option1 = $('select#' + id1 + '_type :selected');
            
            var h = option1.attr('data-height');
            var mh = option1.attr('data-max-height');

            $('#' + id1 + '_height_field option, #' + id1 + '_max_height_field option').removeAttr('selected');
            
            $('#' + id1 + '_height_field option[value=' + h + ']').attr('selected', 'selected');
            $('#' + id1 + '_max_height_field option[value=' + mh + ']').attr('selected', 'selected');
        };

        if( $('select#modern_slider_type, select#modern_slider_second_type').length > 0 )
        {
            ChangeSlideType();

            var ids = $('select#modern_slider_type').length > 0 ? 'modern_slider' : 'modern_slider_second';

            if($('#' + ids + '_height_field').hasClass('default-value')) {
                ChangeSliderTypeSetting(ids);
            }

            $('select#' + ids + '_type').unbind().on('change', function() {
                ChangeSlideType();
                ChangeSliderTypeSetting(ids);
            });


            
        
        
            
        
        }


        function ChangeTranslatorStatus(obj) {
            
            if(obj.val() === 'on')
            {
                $('.msg-disabled').hide();
                $('.field-trans').removeAttr('disabled');
            }
            else
            {
                $('.msg-disabled').show();
                $('.field-trans').attr('disabled', 'disabled');
            }
        }


        var objTrans = $('#setting_translator_status');

        if(objTrans.length > 0)
        {
            ChangeTranslatorStatus(objTrans);
            objTrans.unbind().on('change', function() { ChangeTranslatorStatus( $(this) ); } );
        }


        $('.btn-colors .btn').unbind().on('click', function() {
            $(this).closest('.btn-colors').find('.btn').removeClass('btn-active');
            $(this).addClass('btn-active');
        });

        $('#btn_group_setting_theme_color_select .btn').unbind('mousedown').on('mousedown', function() 
        {
            var menuType = $('#setting_menuType').val();
            var v1 = $(this).attr('data-color');
            var c1 = v1 != 'btn-white' ? 'btn-light' : 'btn-dark';
            
            var bg = $('#btn_group_setting_menu_bg_color');
            var brd = $('#btn_group_setting_menu_brd_color');
            var txt = $('#btn_group_setting_menu_txt_color');
            var brand = $('#btn_group_setting_menu_brand_color');

            if(menuType === 'minimal' || menuType == 'vertical-slide') 
            {
                bg.find('.btn-black').click();
                brd.find('.btn-black').click();
                txt.find('.btn-light').click();

                if( v1 === 'btn-blue' ) { v1 = 'btn-blue-gradient-2'; }
                else if( v1 === 'btn-red' || v1 === 'btn-black' ) { v1 = 'btn-red-gradient'; }
                else if( v1 === 'btn-pink' ) { v1 = 'btn-pink-gradient'; }
                else { v1 += '-flat'; }

                brand.find('.' + v1).click();
            }
            else 
            {
                bg.find('.' + v1).click();
                brd.find('.' + v1).click();
                txt.find('.' + c1).click();
            }
        });
    });
    
})( jQuery );