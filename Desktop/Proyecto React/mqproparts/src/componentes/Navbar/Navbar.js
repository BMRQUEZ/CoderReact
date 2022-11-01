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
              <button className="Option">Celular</button>
              <button className="Option">Tablet</button>
              <button className="Option">Notebook</button>
          </div>
          <CartWidget />
      </nav>
  )
}

export default Navbar