import { useLocation } from "react-router-dom"
import useAsyncRequest, { TYPES } from "../../hooks/useAsyncRequest"
import { TProduct } from "../../interfaces/IProduct"
import Heading from "../Layouts/Heading"
import ProductItem from "../Products/ProductItem"
import Pagination from "./Pagination"


const usePage = () => {
    const page = new URLSearchParams(useLocation().search).get('page');
    return page ? parseInt(page) : 1;
}

const ProductsList = () => {

    const page = usePage();
    const action = { type: TYPES.PRODUCTS_LIST, page };
    
    const [loading, result] = useAsyncRequest(action);

    type tp = { products: TProduct[], pages: number };
    const {products = [], pages = 0}: tp = result;

    
    return (
        <>
            <section className="main py-10">
                <div className="container mx-auto text-center">

                    <Heading 
                        title="PRODUCTS LIST" 
                        desc="There are many variations of passages of lorem ipsum available." 
                    />

                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.map(i => <ProductItem key={i.id} item={i} />)} 
                    </div>

                    {(!loading && pages > 1) && (
                        <Pagination page={page} pages={pages} />
                    )}
                </div>
            </section>
        </>
    )
}

export default ProductsList
