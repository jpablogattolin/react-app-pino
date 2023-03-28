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
     
     <Routes>
     <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<p>Hola usuarios</p>} />
      <Route path="/" element={<ItemListContainer greeting={"Listado de todos los productos"} />} />
      <Route path="/category/:id" element={<ItemListContainer greeting ="listado de categoria" />} />
      <Route path="/item/id:" element={<ItemDetailContainer />} />
      <Route path="*" element={<ErrorPage />} />

     </Routes>
     </BrowserRouter>
     
   
  );
}

export default App;


