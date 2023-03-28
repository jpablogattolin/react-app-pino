import React from "react";

const ProductList = (productos) => {
    return <div> 
        {productos.map ((producto) => (
        <h3 key={producto.id}>{producto.title}</h3>))}</div>
};

export default ProductList;