import { ChangeEvent, FC } from "react";
import { TCart } from "../../interfaces/IProduct";

interface IProps {
    cartItem: TCart,
    updateCart: (id: number, count: number) => void;
    removeCart: (id: number) => void;
}


const SidebarCartItem: FC<IProps> = ({ cartItem = {}, updateCart, removeCart }) => {

    const { id, title, count, price } = cartItem as TCart;

    const removeHandle = () => removeCart(id);

    const updateHandle = (action: string) => () => {
        const cnt = action === 'increase' ? count + 1 : count - 1;
        updateCart(id, cnt);
    }

    const countChange = (e: ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if(Number(v)) {
            updateCart( id, parseInt(v) );
        }
    }

    return (
        <li>
            <img src={`/images/p${id}.jpg`} alt="p" width={65} height={74} />

            <div>
                <h6>{title}</h6>
                <div className="cart">
                    <span onClick={updateHandle('increase')}>+</span>
                    <input type="text" value={count} onChange={countChange} />
                    <span onClick={updateHandle('decrease')}>-</span>
                </div>
                <p>
                    <span>{count} × </span>
                    ${price.toFixed(2)}
                </p>
            </div>

            <svg onClick={removeHandle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            
        </li>
    );
};

export default SidebarCartItem
