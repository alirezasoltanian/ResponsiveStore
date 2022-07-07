import React, { Component } from 'react';
import styles from './Logos.module.css';

import image1 from '../../images/brand1.png'
import image2 from '../../images/Framsse 1.png'
import image3 from "../../images/brand2.png"
class Logos extends Component {
  state = {  } 
  render() { 
    return (
      <div className={styles.RContainer}>
      <div className={styles.container}>
        <h3>Another brands ...</h3>
        <div>
            <img src={image1}  alt='image1' />
            <img src={image2}  alt='image2' />
            <img src={image3}  alt='image3' />
        </div>
      </div>
      </div>
    );
  }
}
 
export default Logos;