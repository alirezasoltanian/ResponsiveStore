import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Functions
import { shorten, isInCart, quantityCount } from '../../helper/function';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import { MdDelete } from 'react-icons/md';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// Style
import styles from "./product.module.css";
import { Checkbox, Rating } from '@mui/material';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);
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
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><MdDelete /></button>}
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;