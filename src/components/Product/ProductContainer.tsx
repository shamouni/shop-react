import { useContext } from "react";
import {useParams} from 'react-router-dom';

import useAsyncRequest, { TYPES } from "../../hooks/useAsyncRequest";
import ShopContext from '../../store/context';

import OfferProducts from "../Home/OfferProducts";
import ProductCart from "./ProductCart";
import Tabs from "./Tabs";

const ROOT = process.env.REACT_APP_ROOT;


const ProductContainer = () => {

    const {id = 0} = useParams();
    const {addCart} = useContext(ShopContext);

    const action = { type: TYPES.SINGLE_PRODUCT, id: +id };
    const [loading, data] = useAsyncRequest(action);

    const {product, related} = data;
    const {title, price, desc} = product || {};

    const addItem = (count: number) => {
        addCart({
            id: +id,
            title,
            price,
            count
        });
    }


    return (
        <section className="main page-single bg-white">
            <div className="container-full px-7 2xl:px-20">
                
                <div className="product md:flex">

                    <div className="basis-2/5 max-w-[500px]">
                        {!loading && (
                            <img src={`${ROOT}/images/p${id}.jpg`} alt="my product" />
                        )}
                    </div>

                    <div className="basis-3/5 mt-5 md:mt-0 md:pl-10">
                        <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>

                        <p className="price mt-4 mb-6 text-xl text-green-700">
                            ${price && price.toFixed(2)}
                        </p>

                        <p className="desc">
                            {desc}
                            {desc}
                            {desc}
                        </p>

                        <p className="entity font-bold text-sm mt-5 mb-5">
                            7 in stock
                        </p>

                        <ProductCart addItem={addItem} />
                    </div>

                </div>

            </div>

            <Tabs />

            <OfferProducts 
                data={related} 
                title="RELATED PRODUCTS"
            />

        </section>
    )
}

export default ProductContainer
