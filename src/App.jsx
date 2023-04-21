
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';



function App() {

   return (
      
      <>
      <Home />
      <Navbar />
      
      <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
         <Route path="/products" element={<Navigate to="/products" />} />
         <Route path="/home" element={<p>BIENVENIDOS A TU TIENDA VIRTUAL</p>} />
         <Route path="/products" element={<ItemListContainer greeting={"Listado de todos los productos"} />} />
         <Route path="/category/:id" element={<ItemListContainer greeting={"listado de categoria"} />} />
         <Route path="/item/id:" element={<ItemDetailContainer />} />
         <Route path="*" element={<ErrorPage />} />
      </Routes></>



   );
}

export default App;


