import { FC } from 'react';
import { TCart } from '../../interfaces/IProduct';
import SidebarCartHeading from './SidebarCartHeading'
import SidebarCartItem from './SidebarCartItem'
import SidebarCheckout from './SidebarCheckout'

interface IProps {
    carts: TCart[];
    sum: number;
    updateCart: (id: number, count: number) => void;
    removeCart: (id: number) => void;
    closeCart: () => void;
}

const SidebarCart: FC<IProps> = ({ carts = [], sum, updateCart, removeCart, closeCart }) => {

    return (
        <>

        <div className={`sidebar-cart w-0 whitespace-nowrap overflow-hidden 
            h-full z-[99] fixed right-0 top-0 flex flex-col bg-white`}>

            <SidebarCartHeading closeCart={closeCart} />

            <ul className='list flex-1 h-full px-5'>
                {carts && carts.length > 0 ? 
                    carts.map(i => (
                        <SidebarCartItem 
                            cartItem={i} 
                            updateCart={updateCart} 
                            removeCart={removeCart} 
                            key={i.id} 
                        />)
                    ) : 
                    <li className='mt-5 text-gray-500'>Your cart is Empty</li>
                }
            </ul>
            
            <SidebarCheckout sum={sum} />

        </div>
        </>
    );
};

export default SidebarCart
