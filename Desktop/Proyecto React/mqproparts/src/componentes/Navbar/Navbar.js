import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'


const Navbar=() => {
    return (
      <nav>
            <div>
                <Logo/>    
            </div>
            <div >
            <button> Home </button>
            <button> Productos</button>
            <button> Quienes Somos?</button>
            </div>
            <div>
                <CartWidget/>
            </div>
      </nav>
     )
}
export default Navbar