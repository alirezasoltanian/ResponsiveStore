import React, { useContext, useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../images/Framsse 1.png";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";
import { CartContext } from "../context/CartContextProvider";
import { auth } from "../firebase";
const Navbar = ({ Open , openHandler }) => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  const { state } = useContext(CartContext);

  return (
    <header
      className={
        Open ? styles.close : show ? styles.header : styles.headerScroll
      }
    >
      <div className={styles.listContainer}>
        <h2 className={styles.text}>
          RESPONSIVE
          <img className={styles.logos} src={logo} alt="logo" />
        </h2>
        <ul className={styles.list}>
          <li>
           <Link to="/login" onClick={openHandler}>Login</Link>/<Link to="/signUp" onClick={openHandler} >SignUp</Link> 
          </li>
          <li>
            <Link to="/" onClick={openHandler} >Home</Link>
          </li>
          <li>
            <Link to="products" onClick={openHandler}>Products</Link>
          </li>
          <li>
            <Link to="/contactUs" onClick={openHandler} >ContactUs</Link>
          </li>
          <li>
            <Link to="/aboutUs" onClick={openHandler} >About us</Link>
          </li>
        </ul>
      </div>

      <div className={styles.iconContainer}>
        <Link to="/cart" onClick={openHandler} className={styles.bas} >
          <BsFillBasketFill />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </header>
  );
};

export default Navbar;
