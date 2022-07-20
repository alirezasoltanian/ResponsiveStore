import React ,{useContext , useState , useEffect} from 'react';
import styles from './Navbar.module.css'
import logo from '../images/Framsse 1.png'
import { Link } from 'react-router-dom';
import { BsFillBasketFill } from 'react-icons/bs';
import { CartContext } from '../context/CartContextProvider'

const Navbar = ({Open}) => {
  const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
  const {state} = useContext(CartContext)

  return ( 
    <header  className={Open  ? styles.close : show ?  styles.header : styles.headerScroll }>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li><Link to = '/'>home</Link></li>
          <li><Link to = 'products'>products</Link></li>
          <li><Link to = '/contactUs'>ContactUs</Link></li>
          <li><Link to = '/aboutUs'>about us</Link></li>
        </ul>
      </div>
      <h2 className={styles.text}>RESPONSIVE<img  className={styles.logos} src={logo} alt = 'logo' /></h2>
      <div className={styles.iconContainer}>
            <Link to='/cart'><BsFillBasketFill /></Link>
            <span>{state.itemsCounter}</span>
            
      </div>
      
    </header>

   );
}
 
export default Navbar;