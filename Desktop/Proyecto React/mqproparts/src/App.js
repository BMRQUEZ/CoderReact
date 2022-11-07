import './App.css';
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import MercadoLibre from './componentes/MercadoLibre/MercadoLibre';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MercadoLibre/>
      <ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>
    </div>
  );
}

export default App;