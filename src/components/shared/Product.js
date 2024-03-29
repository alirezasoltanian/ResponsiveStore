import React from 'react';
import { Link } from 'react-router-dom';

// Functions
import { shorten, isInCart, quantityCount } from '../../helper/function';

// Redux
import { useDispatch, useSelector } from "react-redux";
// Icons
import { MdDelete } from 'react-icons/md';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// Style
import styles from "./product.module.css";
import { Checkbox, Rating } from '@mui/material';
import {increase , decrease , addItem , removeItem } from "../redux/cart/cartAction"
const Product = ({productData}) => { 
    const  state  = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    
    return (
        <div className={styles.container} >
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div style={{display:"flex" , justifyContent:"space-between"}}>
            <Rating style={{ marginLeft:"20px" }} name="read-only" value={productData.rating.rate} readOnly />
            <Checkbox style={{ marginRight:"20px" }} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><MdDelete /></button>}
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;