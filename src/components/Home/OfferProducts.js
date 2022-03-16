import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heading from "../Layouts/Heading"
import ProductItem from "../Products/ProductItem";

const settings = {
    dots: true,
    infinite: false,
    touchThreshold: 7,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            variableWidth: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            variableWidth: true,
            dots: false
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
    ]
};


const OfferProducts = ({data = [], title = '', desc = ''}) => {

    return (
        <>
            <section className="offers py-16 bg-white">
                <div className="container mx-auto">
                    <Heading title={title} desc={desc} />

                    <Slider {...settings}>
                        {data.map(i => <ProductItem item={i} key={i.id} />)}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default OfferProducts
