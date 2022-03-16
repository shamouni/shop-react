import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';

const Body1 = document.getElementsByTagName('body')[0];
const BC = Body1.classList;
const Cls = 'show-nav';
const ClsCart = 'show-cart';


const NavMobile = () => {

    useEffect(() => {
        
        Body1.addEventListener('mousedown', hideNav);

        return () => {
            Body1.removeEventListener('mousedown', hideNav);
        }
        // eslint-disable-next-line
    }, []);


    const closeMenuAndCart = () => {
        BC.remove(Cls);
        BC.remove(ClsCart);
    }

    const toggleShow = () => {

        if(BC.toString().indexOf(Cls) === -1) {
            BC.add(Cls);
        }
        else {
            BC.remove(Cls);
        }
    }

    const hideNav = () => {
        if(BC.toString().indexOf(Cls) !== -1) {
            toggleShow();
        }
    }

    const navClick = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
    }
    

    return (
        <>
        <div id="nav-mobile" onMouseDown={navClick}>
            <Link className="logo" to="/">
                <img src="/images/logo.png" alt="mobile logo" />
            </Link>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Laptops</Link></li>
            <li><Link to="/products">Phones</Link></li>
            <li><Link to="/products">Clothes</Link></li>
            <li><Link to="/products">Contact Us</Link></li>
            </ul>
        </div>

        {/* <div className="col col-nav col-auto">
            <i onClick={toggleShow} className="fa fa-bars" aria-hidden="true"></i>
        </div> */}

        <div onClick={closeMenuAndCart} className="cover"></div>
        </>
    )
}

export default NavMobile
