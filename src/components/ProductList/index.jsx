import React, { useContext } from "react";
import { CartContext } from "../ShoppingCartContext";


const ProductList = ({productos}) => {

    const [cart, setCart]=useContext (CartContext);

    const AddToCart = () => {
        setCart ((currItems) => {
            const isItemsFound=currItems.find ((productos) => productos.id === id);
            if (isItemsFound) {
                return currItems.map ((productos) => {
                   return {...productos, quantity: productos.quantity +1} ;  
                    } else {
                        return productos;
                        
                    }
                }) ;         
             
            

        };
    }

    return (
    <div className="container text-center mt-5"> 
       { productos.map ((producto) => (
      <div className="card"  key={producto.id}>
           <h3>{producto.title}</h3>
           <p> Precio: $ {producto.price}</p>
           <p> Descripcion: {producto.description}</p>
           <img src={producto.image} alt={producto.title} />
           <button type="button" class="btn btn-warning" onClick={() => AddToCart ()}>Añadir al Carrito</button>

      </div>
       ))};
        </div>
    )
       }

export default ProductList;