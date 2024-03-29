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
// Redux
import store from './components/redux/store'
import { Provider } from 'react-redux'
// import Navbara from './components/shared/Navbar';

import ShopCart from "./components/ShopCart";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
        <Provider store={store}>

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
        </Provider>
    </div>
  );
}

export default App;
