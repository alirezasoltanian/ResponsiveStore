import React from 'react';


// Functions
import { shorten } from '../../helper/function';

// Icons
import { MdDelete } from 'react-icons/md';
// Redux
import { useDispatch } from "react-redux";
import {increase , decrease , removeItem } from "../redux/cart/cartAction"
// Style
import styles from "./carts.module.css";

const Cart = (props) => {

    const dispatch = useDispatch();
    const {image, title, price, quantity} = props.data;

    return (
        <div className={styles.container} >
            <img className={styles.productImage} src={image} />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch(decrease(props.data))} >-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))} ><MdDelete /></button>
                }
                <button onClick={() => dispatch(increase(props.data))} >+</button>
            </div>
        </div>
    );
};

export default Cart;