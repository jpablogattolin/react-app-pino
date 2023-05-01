import React from 'react'
import mainfoto from "../../img/mainfoto.jpg";
import styles from "./index.modules.css"

export const Main = () => {
  return (
    <div>
        <h2 className="title">Encontraras variedad de productos de las mejores marcas y calidad</h2>
        <img  src={mainfoto} className="photo" alt="{producto.image}" />
    </div>
  )
}

export default Main;