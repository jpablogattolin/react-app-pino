
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Main from './components/Main';



function App() {

   return (
      
      <>
      <Home />
      <Navbar />
      
      <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
         {/* <Route path="/products" element={<Navigate to="/products" />} /> */}
         <Route path="/home" element={<Main />} />
         <Route path="/productos" element={<ItemListContainer />} />
         <Route path="/category/:id" element={<ItemListContainer />} />
         <Route path="/item/id:" element={<ItemDetailContainer />} />
         <Route path="*" element={<ErrorPage />} />
      </Routes></>



   );
}

export default App;


