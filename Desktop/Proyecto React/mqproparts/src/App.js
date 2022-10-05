import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';


function App() {
  return (
    <>
     
     <Navbar />
     <ItemListContainer greeting={'Bienvenidos'}/>
     
     </>
  );
}

export default App;
