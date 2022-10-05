import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar=() => {
    return (
      <nav>
            <div>
                <h1>MQProParts</h1>     
            </div>
            <div>
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