import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";
import Hamburger from "./components/hamburger";
import Footer from "./components/footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/shared/ScrollTop";
//login
import Login from "./components/Login/Login";
import SignUp from "./components/Login/Signup";
//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";
// import Navbara from './components/shared/Navbar';

import ShopCart from "./components/ShopCart";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <CartContextProvider>
          <ProductContextProvider>
            <Hamburger />
            {/* <Navbara /> */}

            <Routes>
              <Route path="/cart" element={<ShopCart />} />
              <Route path="/products/:id" element={<ProductsDetails />} />
              <Route path="/products" element={<Store />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contactUs" element={<ContactUs />} />

              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
          </ProductContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
