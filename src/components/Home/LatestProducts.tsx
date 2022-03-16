import { FC } from "react"
import { TProduct } from "../../interfaces/IProduct"
import Heading from "../Layouts/Heading"
import ProductItem from "../Products/ProductItem"

interface IProps {
    data: TProduct[]
}

const LatestProducts: FC<IProps> = ({ data = [] }) => {
    return (
        <>
            <section className="py-10 bg-slate-100 border-y border-gray-200">
                <div className="container mx-auto text-center">

                    <Heading 
                        title="LATEST PRODUCTS" 
                        desc="There are many variations of passages of lorem ipsum available." 
                    />

                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {data.map(i => <ProductItem key={i.id} item={i} />)}
                    </div>

                    <a className="text-sm text-gray-500 hover:text-green-700 underline inline-block" href="#!">
                        « See More Products »
                    </a>                    
                </div>
            </section>
        </>
    )
}

export default LatestProducts
