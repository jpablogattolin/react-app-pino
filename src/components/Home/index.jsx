import React from 'react'
import weblogo from "../../img/weblogo.png"
import  styles from "../Home/home.modules.css"



const Home = () => {
  return (
    <div>
        <img className="logo" src={weblogo} width={250} height={200} alt="logo" />
        <h1 className="container">BIENVENIDOS A TU MAYORISTA DE LIMPIEZA</h1>

    </div>
  )
}

export default Home