import React from "react";


const ProductList = ({productos}) => {
    return (
    <div className="container text-center mt-5"> 
       { productos.map ((producto) => (
      <div className="card"  key={producto.id}>
           <h3>{producto.title}</h3>
           <p>{producto.price}</p>
           <p>{producto.description}</p>
           <img src={producto.image} alt={producto.title} />
           <button>Añadir a Carrito</button>
      </div>
       ))};
        </div>
    )
};

export default ProductList;