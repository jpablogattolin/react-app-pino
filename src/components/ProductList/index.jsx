import React from "react";



const ProductList = ({productos}) => {

    return (
    <div className="container text-center mt-5"> 
       { productos.map ((producto) => (
      <div className="card"  key={producto.id}>
           <h3>{producto.title}</h3>
           <p> Precio: $ {producto.price}</p>
           <p> Descripcion: {producto.description}</p>
           <img src={producto.image} alt={producto.title} />
           <button type="button" class="btn btn-warning" >Añadir al Carrito</button>

      </div>
       ))};
        </div>
    )
       }

export default ProductList;