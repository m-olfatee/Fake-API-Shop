import { HashRouter as Router, Routes as Switch, Route } from "react-router-dom";
import MyProvider from "../context/MyProvider";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import ProductDetail from "../components/pages/ProductDetail";
import Cart from "../components/pages/Cart";
import Checkout from "../components/pages/Checkout";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import NotFound404 from "../components/pages/NotFound404";
import Login from "../components/pages/Login";
import LoginCheck from "../components/pages/LoginCheck";

const Routes = () => (
    <MyProvider>
        <Router>
            <Header />
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/product-detail' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/login-check' element={<LoginCheck />} />
                <Route path='*' element={<NotFound404 />} />
            </Switch>
            <Footer />
        </Router>
    </MyProvider>
)

export default Routes