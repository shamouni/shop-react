import {Link} from 'react-router-dom';
import {TProduct} from '../../interfaces/IProduct';

const ROOT = process.env.REACT_APP_ROOT;

interface IProps {
    item: TProduct
}

const ProductItem = ({ item }: IProps) => {

    const {id, title, price, category} = item;
    const url = ROOT + '/products/' + id;

    return (
        <div className="card text-center px-5 my-5">
            
            <Link to={url} className="block">
                <img 
                    src={`${ROOT}/images/p${id}.jpg`} 
                    alt={title} 
                    width={294} 
                    height={336} 
                    className="border divide-slate-200" 
                />
            </Link>

            <div className="text mt-2">
                <h5 className="text-base font-bold hover:text-green-800">
                    <Link to={url}>
                        {title}
                    </Link>
                </h5>
                
                <span className="cat text-xs text-gray-400">{category}</span>
                <div className="price text-green-700 font-bold">${price}</div>
            </div>
        </div>
    )
}

export default ProductItem
