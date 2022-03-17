import {useEffect} from 'react';
import '../../assets/css/slider.css';
import Slides from './Slides';

let Handle: any = null;
const time = 6000;
const gap = 2;


const SliderContainer = () => {

    useEffect(() => {
        
        initialize();

        return () => {
            unbind();
        }
        // eslint-disable-next-line
    }, []);


    const initialize = () => {

        const container = document.querySelector('.slider-container') as HTMLElement;

        window.addEventListener('load', startSlider);
        window.addEventListener('resize', startSlider);

        window.addEventListener('blur', () => clearTimeout(Handle));
        window.addEventListener('focus', startSlider);

        container.addEventListener('mouseenter', () => clearTimeout(Handle));
        container.addEventListener('mouseleave', startSlider);

        const prev = document.getElementById('prev-slide') as HTMLElement;
        const next = document.getElementById('next-slide') as HTMLElement;

        prev.addEventListener('click', () => slide('prev', false));
        next.addEventListener('click', () => slide('next', false));
    }

    const unbind = () => {

        window.removeEventListener('load', startSlider);
        window.removeEventListener('resize', startSlider);

        window.removeEventListener('blur', () => clearTimeout(Handle));
        window.removeEventListener('focus', startSlider);
    }


    const slide = (dir = 'next', loop = true) => {

        const slider = document.querySelector(".scroll-container") as HTMLElement;
        
        const slideWidth = window.screen.availWidth / 1.1;
        
        const l = slider.scrollLeft;
        const scrollEnd = slider.scrollWidth - slider.offsetWidth;

        if(dir === 'next') {
            slider.scrollLeft = (l + gap < scrollEnd) ? l + slideWidth : 0;
        }
        else {
            slider.scrollLeft = (l - gap > 0) ? l - slideWidth : slider.scrollWidth;
        }


        clearTimeout(Handle);

        if(loop) {
            Handle = setTimeout(slide, time);
        }
    }

    function startSlider() {

        clearTimeout(Handle);

        if(window.screen.availWidth > 1200) {
            Handle = setTimeout(slide, time);
        }
    }


    return (
        <section className="slider">
            <Slides />
        </section>
    )
}

export default SliderContainer
