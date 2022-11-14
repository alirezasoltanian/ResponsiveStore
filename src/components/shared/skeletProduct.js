import React from 'react';
// Style
import styles from "./product.module.css";
import { Skeleton } from '@mui/material';
const Product = () => { 
    
    return (
        <div className={styles.container} style={{height:'460px'}} >

            <Skeleton variant='rectangular'  style={{width: '300px' , height: '300px'}}  />
            <Skeleton variant='text' style={{width: '100px' , height: '30px' , marginLeft: '10px' }} /> 
            <Skeleton variant='text' style={{width: '80px' , marginLeft: '10px' }} />
            <div style={{display:"flex" , justifyContent:"space-between"}}>
            <Skeleton style={{ marginLeft:"20px" , width: '80px'}} />
            <Skeleton style={{ marginRight:"20px" , width: '30px' }}  />
            </div>
            <div className={styles.linkContainer} >
                <Skeleton style={{width: '50px'  }}  />
                <div className={styles.buttonContainer} >
                  <Skeleton  style={{width: '100px' , height: '50px' }} />
                </div>
            </div>
        </div>
    );
};

export default Product;