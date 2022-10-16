// import React, { Component } from 'react';
// import Card from './Card';
// import styles from './Cards.module.css';



// class Cards extends Component {
//   constructor() {
//     super()
//     this.state ={
//       infoFlower : [ 
//         {id : 1 , image : 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' , name :'flower1' ,  color : 'red' } ,
//         {id : 2 , image : "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" , name : 'flower2' ,  color : 'pink' } ,
//         {id : 3 , image : "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", name : 'flower3' ,  color : 'green' } ,
//         {id : 4 , image : "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" , name : 'flower4' ,  color : 'yellow' }
  
//       ]
//     }
//   }
//   state = {  } 
//   render() { 
//     return (
//       <div className={styles.container}>
//         {this.state.infoFlower.map(info =>  <Card key={info.id} image={info.image} name = {info.name} id={info.id} color = {info.name} />)}
//       </div>
//     );
//   }
// }
// export default Cards;
import React, { useContext } from 'react';

// Components
import Product from '../shared/Product';

// Context
import { ProductsContext } from '../../context/ProductContextProvider';

// Style
import Styles from "./Cards.module.css";

//img
import img from '../../images/Spinner-1.1s-200px (1).gif'
import { IoMdArrowDroprightCircle } from "react-icons/io";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
       
        
      <section className={Styles.container}>
      <section className={Styles.nav}>
        <h3 className={Styles.title}>Our suggestions</h3>
        <Link to="/products" className={Styles.goStore}>
          <IoMdArrowDroprightCircle />
          <h3 >store</h3>
        </Link>
      </section>
      {!products.length && <img src={img} />}
      {
        
                products.length &&
                <Swiper  
              breakpoints={{
                  // when window width is >= 268px
                268: {
                    slidesPerView: 1,
                  slidesPerGroup  : 1

                    
                  },
                  // when window width is >= 640px
                740: {
                    slidesPerView: 2 ,
                    slidesPerGroup  : 2
  
                  },
                // when window width is >= 640px
                1023: {
                  slidesPerView: 3,
                  slidesPerGroup  : 3

                },
                1300: {
                  slidesPerView: 4,
                  slidesPerGroup  : 4

                },
                // when window width is >= 68px
                1568: {
                  slidesPerView: 5,
                  slidesPerGroup  : 5
                },
                
              }}
            // slidesPerView = {5}
            // slidesPerGroup ={5}
        // spaceBetween = {50}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={Styles.products}
      >
                {products.slice(0 , 10).map(product =>  <SwiperSlide ><Product 
                        key={product.id} 
                        productData = {product}
                    /></SwiperSlide> )} </Swiper >

                  
                    
            }
      </section>

        
        
        
        
        
      
    );
};

export default Store;