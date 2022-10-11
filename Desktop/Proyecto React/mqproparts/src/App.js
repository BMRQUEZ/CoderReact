import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path= '/' element= {<ItemListContainer greeting={'Nuestros Productos'}/>}/> 
         <Route path= '/detail/:productId' element={<ItemDetailContainer />}/> 
         
       </Routes>
     </BrowserRouter> 
     </div> 
  );
}

export default App;
