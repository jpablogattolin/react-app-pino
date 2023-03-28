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
    <div className="App">
     <Navbar />
     
     <Routes>
     <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<p>Hola usuarios</p>} />
      <Route path="/products" element={<ItemListContainer greeting={<h1>"Bienvenidos a nuestra tienda"</h1>} />} />

     </Routes>
     
    </div>
  );
}

export default App;


