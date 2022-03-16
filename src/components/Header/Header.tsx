import { useContext } from 'react'
import {Link} from 'react-router-dom'
import ShopContext from '../../store/context'

import SidebarCart from "../Cart/SidebarCart"
import Menu from "./Menu"
import NavMobile from "./Nav-Mobile"


const Header = () => {

    const {carts, removeCart, updateCart} = useContext(ShopContext);

    const sum = carts.reduce((s, i) => s + i.count * i.price, 0);
    const body = document.querySelector('body') as HTMLElement;
    const BC = body.classList;

    const hideCart = () => BC.remove('show-cart');

    const cartClick = () => {
        BC.add('show-cart');
    }

    const toggleShow = () => {
        BC.add('show-nav');
    }


    return (
        <header className='bg-white'>
            
            <SidebarCart 
                carts={carts} 
                sum={sum} 
                removeCart={removeCart} 
                updateCart={updateCart}
                closeCart={hideCart} 
            />

            <div className="container-full bg-white py-3">
                <div className="flex justify-between px-7 2xl:px-20">

                    <div onClick={toggleShow} className="flex items-center md:hidden mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    <div className="flex items-center">
                        <Link to="/">
                            <img src="/images/logo.png" alt="logo" width={218} className="w-[180px] sm:w-[218px]" />
                        </Link>
                    </div>

                    <div className="text-sm flex justify-end">

                        <div className="hidden md:flex items-center">
                            <svg id="svg-7628" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4" fill="rgba(0,0,0,.3)" viewBox="0 0 24 24">
                                <svg id="svg-7628" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M13,7c2.2,0.1,3.9,1.9,4,4c0,0.5,0.5,1,1,1c0,0,0,0,0,0c0.6,0,1-0.5,1-1c-0.1-3.2-2.7-5.8-5.9-6  c-0.5,0-1,0.4-1,1C12,6.5,12.4,7,13,7z M12,0c-0.6,0-1,0.4-1,1s0.4,1,1,1c5.5,0,10,4.5,10,10c0,0.6,0.4,1,1,1s1-0.4,1-1  C24,5.4,18.6,0,12,0z M16,14c-2,0-3.7,1.2-4.5,2.9c-1.9-1-3.4-2.5-4.4-4.4C8.8,11.7,10,10,10,8c0-2.8-2.2-5-5-5S0,5.2,0,8  c0,8.8,7.2,16,16,16c2.8,0,5-2.2,5-5S18.8,14,16,14z M16,22C8.3,22,2,15.7,2,8c0-1.7,1.3-3,3-3s3,1.3,3,3c0,1.4-1,2.7-2.4,2.9  l-1.2,0.2l0.4,1.1c1.2,3.2,3.7,5.7,6.9,6.9l1.1,0.4l0.2-1.2C13.3,17,14.6,16,16,16c1.7,0,3,1.3,3,3S17.7,22,16,22z"></path>
                                </svg>
                            </svg>
                            <div>
                                <span className="text-base font-bold text-gray-800">24/7 Support</span>
                                <h2 className="text-gray-500 text-[0.85rem]">+98 099 022 777</h2>
                            </div>
                        </div>

                        <div onClick={cartClick} className="flex items-center cursor-pointer ml-8 2xl:ml-14 text-slate-400 hover:text-green-700">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>

                            <div>
                                <span className="text-base font-bold text-gray-800">${sum.toFixed(2)}</span>
                                <div className="text-xs md:text-[0.85rem] text-gray-500">{carts.length} items</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <Menu />
            <NavMobile />

        </header>
    )
}

export default Header
