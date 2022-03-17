import {useEffect} from 'react'
import { Link } from 'react-router-dom';

const ROOT = process.env.REACT_APP_ROOT || "";
const pLink = ROOT + '/products';

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
            <Link className="logo" to={ROOT}>
                <img src={`${ROOT}/images/logo.png`} alt="mobile logo" />
            </Link>
            <ul>
            <li><Link to={ROOT}>Home</Link></li>
            <li><Link to={pLink}>Laptops</Link></li>
            <li><Link to={pLink}>Phones</Link></li>
            <li><Link to={pLink}>Clothes</Link></li>
            <li><Link to={pLink}>Contact Us</Link></li>
            </ul>
        </div>

        <div onClick={closeMenuAndCart} className="cover"></div>
        </>
    )
}

export default NavMobile
