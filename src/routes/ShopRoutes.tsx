import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from "../components/Home/HomeContainer";
import Product from '../components/Product/ProductContainer';
import ProductsList from '../components/Products/ProductsList';


const ShopRoutes = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
    </Router>
  )
};

export default ShopRoutes;
