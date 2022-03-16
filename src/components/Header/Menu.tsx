import {Link} from 'react-router-dom';
import Search from "./Search"

const Menu = () => {
    return (
        <div className="bg-white border-y border-t-zinc-200 border-b-zinc-300 px-10 2xl:px-20">
            <nav className="container-full menu-main hidden md:flex justify-between">
                <ul className="flex font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Laptops</Link></li>
                    <li><Link to="/products">Phones</Link></li>
                    <li><Link to="/products">Clothes</Link></li>
                    <li><Link to="/products">Contact Us</Link></li>
                </ul>
                <Search />
            </nav>
        </div>
    )
}

export default Menu
