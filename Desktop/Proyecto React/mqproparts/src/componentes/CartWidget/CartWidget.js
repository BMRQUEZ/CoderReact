import './CartWidget.css'
import cart from './assets/cart.svg.png'

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg' style={{width:'px', 
                                                                          height: ' px',
                                                                          padding:'1px' }  } />
            5
        </div>
    )
}

export default CartWidget