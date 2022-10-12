import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
 

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/detail/producId'element={<ItemDetailContainer/>}/>
    </Routes>
    
    <ItemDetailContainer/>
    </BrowserRouter>
     </div> 
  );
}
export default App;
