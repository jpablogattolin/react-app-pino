import React from 'react'
import hallphoto from "../../img/hallphoto.jpg";
import styles from "../Main/index.modules.css";

export const Main = () => {
  return (
    <div>
        <h2 className="title">Encontraras variedad de productos de las mejores marcas y calidad</h2>
        <img  src={hallphoto} className="photo" alt="{producto.image}" />
    </div>
  )
}

export default Main;