import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import ProductList from './components/ProductList';



function App() {

   return (
    
      <BrowserRouter>
     <Navbar />
     
     <h1>TIENDA ONLINE</h1>
     <Routes>
     <Route path="/" element={<Navigate to="/home"/>}/>
     <Route path="/products" element={<Navigate to="/products"/>}/>
      <Route path="/home" element={<p>BIENVENIDOS A TU TIENDA VIRTUAL</p>} />
      <Route path="/products" element={<ItemListContainer greeting={"Listado de todos los productos"} />} />
      {/* <Route path="/category/:id" element={<ItemListContainer greeting ={"listado de categoria"}/>} />
      <Route path="/item/id:" element={<ItemDetailContainer />} />
      <Route path="*" element={<ErrorPage />} />  */}

     </Routes>
     </BrowserRouter>
     
     
   
  );
}

export default App;


