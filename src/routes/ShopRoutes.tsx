import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from "../components/Home/HomeContainer";
import Product from '../components/Product/ProductContainer';
import ProductsList from '../components/Products/ProductsList';
const ROOT = process.env.REACT_APP_ROOT || "";


const ShopRoutes = () => {
  
  return (
    <Router>
        <Header />
        <Routes>
            <Route path={ROOT} element={<Home />} />
            <Route path={ROOT + "/products"} element={<ProductsList />} />
            <Route path={ROOT + "/products/:id"} element={<Product />} />
        </Routes>
        <Footer />
    </Router>
  )
};

export default ShopRoutes;
