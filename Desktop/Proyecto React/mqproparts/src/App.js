import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
     
     <Navbar />
     <ItemListContainer greeting={'Nuestros Productos'}/>
     <ItemDetailContainer /> 
     
     </>
  );
}

export default App;
