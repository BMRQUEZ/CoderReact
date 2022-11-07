import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
const Navbar = () => {

  return (
      <nav className="NavBar" >
          <div className='NavBar'>
          <Logo/>
          </div>
          <div className="Categories">
              <button className="Option">Productos</button>
              <button className="Option">¿Quienes Somos?</button>
              <button className="Option">Contacto</button>
          </div>
          <CartWidget />
      </nav>
  )
}

export default Navbar