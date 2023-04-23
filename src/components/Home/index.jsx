import React from 'react'
import weblogo from "../../img/weblogo.png"
import styles from "../Home/index.modules.css"




const Home = () => {
  return (
    <div>
        <img src={weblogo} width={250} height={200} alt="" />
        <h1 className="maintitle">BIENVENIDOS A TU MAYORISTA DE LIMPIEZA</h1>

    </div>
  )
}

export default Home