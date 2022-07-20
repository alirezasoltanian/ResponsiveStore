import React, { useEffect } from 'react';

//Images
import src from "../images/Workplace.jpg"

//Styles
import Styles from "./AboutUs.module.css";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <main className={Styles.container}>
            <article>
                <h3>AboutUs?</h3>
                <p>Ehsan Kayhani store company started its activity in 2022-5-26 and thank God it has been a good business so far. All employees and workers are trying to deliver quality products to the customer Ehsan Kayhani store company started its activity in 2022-5-26 and thank God it has been a good business so far. All employees and workers are trying to deliver quality products to the customer</p>
            </article>
            <img src={src} /> 
        </main>
    );
};

export default AboutUs;