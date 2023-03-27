import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer greeting={"Bienvenidos al Mayorista de Limpieza"} />
    </div>
  );
}

export default App;

<browserRouter>
<Navbar />
<Routes>
  <Route path="/" element ={ItemListContainer}
  </Routes>
  </browserRouter>
