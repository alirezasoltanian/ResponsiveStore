import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Cart from './shared/Cart';

// Redux
import { useDispatch, useSelector } from "react-redux" ;
import { clear , checkout } from './redux/cart/cartAction'
// Style
import styles from './shopCart.module.css' ;
const ShopCart = () => {

  const  state  = useSelector(state => state.cartState);
  const dispatch = useDispatch();

    return (
        < >
        <div className={styles.container} >
            <div className={styles.cartContainer} >
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
             state.itemsCounter > 0 && <div className={styles.payments} >
             <p><span>Total Items:</span> {state.itemsCounter}</p>
             <p><span>Total Payments:</span> {state.total} $</p>
             <div className={styles.buttonContainer} >
                 <button className={styles.clear}  onClick={() => dispatch(clear())}>Clear</button>
                 <button className={styles.checkout}  onClick={() => dispatch(checkout( ))}>Checkout</button>
             </div>
            </div>
            }
            </div>
            <div className={styles.min}>
            {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.after}>
                        <h3 style={{color : "#a30f2d"  }}>You have not selected anything yet</h3>
                        <Link style={{color : "#a30f2d"  }} to="/products">Go to the shop</Link>
                    </div>          
            }

            {
                state.checkout && <div className={styles.after}>
                        <h3 style={{color : "#239023"  }} >Checked out successfully</h3>
                        <Link style={{color : "#239023"  }}  to="/products">Buy More</Link>
                    </div>
            }
        </div>

        </>
    )
}
export default ShopCart;
