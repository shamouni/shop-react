import { ChangeEvent, FC, useState } from "react"

interface IProps {
    addItem: (count: number) => void
}

const ProductCart:FC<IProps> = ({ addItem }) => {

    const [count, setCount] = useState(1);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count > 1 ? count - 1 : count);
    
    const countChange = (e: ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if(Number(v)) {
            setCount( parseInt(v) );
        }
    }

    const addClick = () => {
        addItem(count);

        const b = document.querySelector('body') as HTMLElement;
        b.classList.add('show-cart');
    }

    return (
        <div className="cart">
            <span onClick={increase}>+</span>
            <input type="text" value={count} onChange={countChange} />
            <span onClick={decrease}>-</span>

            <button onClick={addClick} className="flex items-center px-7 ml-7 bg-green-700 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add To Cart
            </button>
        </div>
    )
}

export default ProductCart
