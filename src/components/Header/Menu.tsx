import {Link} from 'react-router-dom';
import Search from "./Search";
const ROOT = process.env.REACT_APP_ROOT || "";
const pLink = ROOT + '/products';

const Menu = () => {
    return (
        <div className="bg-white border-y border-t-zinc-200 border-b-zinc-300 px-10 2xl:px-20">
            <nav className="container-full menu-main hidden md:flex justify-between">
                <ul className="flex font-bold">
                    <li><Link to={ROOT}>Home</Link></li>
                    <li><Link to={pLink}>Laptops</Link></li>
                    <li><Link to={pLink}>Phones</Link></li>
                    <li><Link to={pLink}>Clothes</Link></li>
                    <li><Link to={pLink}>Contact Us</Link></li>
                </ul>
                <Search />
            </nav>
        </div>
    )
}

export default Menu
