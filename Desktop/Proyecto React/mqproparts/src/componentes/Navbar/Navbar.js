import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'


const Navbar=() => {
    return (
      <nav>
            <div>
                <Logo/>    
            </div>
            <div >
            <Link> Home </Link>
            <Link> Productos</Link>
            <Link> Quienes Somos?</Link>
            </div>
            <div>
                <CartWidget/>
            </div>
      </nav>
     )
}
export default Navbar