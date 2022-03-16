import {useState, useEffect, KeyboardEvent, MouseEvent} from 'react';
import {Link} from 'react-router-dom';

import DataMock from '../../hooks/data-mock.json';
import { TProduct } from '../../interfaces/IProduct';

const body = document.querySelector('body') as HTMLElement;


const Search = () => {

    const [filteredList, setFilteredList] = useState<TProduct[]>([]);
    const [flag, setFlag] = useState(false);
    const [text, setText] = useState("");

    const hideList = () => setFlag(false);
    const showList = () => setFlag(true);
    const inputClick = (e: { stopPropagation: () => any }) => e.stopPropagation();

    useEffect(() => {
        body.addEventListener('mousedown', hideList);

        return () => {
            body.removeEventListener('mousedown', hideList);
        }
    }, []);

    const lookup = (e: KeyboardEvent<HTMLInputElement>) => {
        const { products } = DataMock;
        const { value } = e.target as HTMLInputElement;

        const regular = new RegExp(value, 'i');
        let f = products.filter(i => i.title.match(regular))

        setFilteredList(f);
        setText(value);
    }

    const itemClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        setTimeout(hideList, 500);
    }



    return (
        <div id="search" className="search ml-6 flex-grow max-w-[400px] h-full flex items-center">

            <span className="flex items-center h-full px-3 border-l border-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="#666">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </span>

            <input 
                onKeyUp={lookup} 
                onFocus={showList} 
                onMouseDown={inputClick} 
                type="text" 
                name="search" 
                autoComplete='off' 
                placeholder='Search a product ...' 
                className="w-full h-full border-r border-slate-300 leading-[45px] text-base outline-none" 
            />

            {(flag && text !== "") && (
                <div className="list">
                    {filteredList.map(i => (
                        <Link onMouseDown={itemClick} to={'/products/' + i.id} key={i.id} >
                            {i.title}
                        </Link>
                    ))}
                </div>
            )}
            {(flag && text !== "" && filteredList.length === 0) && (
                <div className="list">
                    <div>No results found</div>
                </div>
            )}
        </div>
    )
}

export default Search
