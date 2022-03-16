import { useState, useEffect } from 'react';
import { TProduct } from '../interfaces/IProduct';
import dataMock from './data-mock.json';

export const TYPES = {
    HOME_DATA: 'HOME_DATA',
    PRODUCTS_LIST: 'PRODUCTS_LIST', 
    SINGLE_PRODUCT: 'SINGLE_PRODUCT'
}

type AT = {
    type: string;
    id?: number;
    page?: number;
}

const reducer = (action: AT, products: TProduct[]): any => {

    let {type, id, page = 1} = action;
    if(id) { id = +id }
    
    switch (type) {
        case TYPES.HOME_DATA: 
            const latest = products.slice(0, 10);
            const offers = products.slice(4, 12);
            const top = products.slice(-8);

            return { latest, offers, top }

        case TYPES.PRODUCTS_LIST:
            const limit = 8;
            const offset = (page - 1) * limit;
            const list = products.slice(offset, page * limit);
            const pages = Math.ceil(products.length / limit);

            return { products: list, page, pages }

        case TYPES.SINGLE_PRODUCT:
            const product = products.find(i => i.id === id);
            const related = products.slice(4, 12);

            return { product, related }

        default:
            return products;
    }
}

const sendRequest = async (action: AT): Promise<TProduct[]> => {

    // const {products: TProduct[]} = dataMock;
    const products: TProduct[] = dataMock.products;

    // simulate async request
    return new Promise((resolve) => {
        const data = reducer(action, products);
        setTimeout(() => resolve(data), 500);
    });
}


const useAsyncRequest = (action: AT): any => {

    const [results, setResults] = useState<TProduct[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const {type, id, page} = action;
    
    useEffect(() => {
        
        try {
            sendRequest(action)
            .then(data => {
                setResults(data);
                setLoading(false);
            }); 
        }
        catch(e) {
            console.log(e);
            setLoading(false);
        }

        // eslint-disable-next-line
    }, [type, page, id]);

    return [loading, results];
}

export default useAsyncRequest
