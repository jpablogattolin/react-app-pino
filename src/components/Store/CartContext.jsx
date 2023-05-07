import React, { createContext } from "react";
import { useContext, useState } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartContextProvider( {children} ) {
    const [cart, setCart] = useState([]);
    const addToCart = ( productos, cant ) => {
        if (isInCart(productos.id)){
           const newCart = cart.map(cartProductos => {
                if (cartProductos.id === productos.id){
                const copyItem = {...cartProductos};
                copyItem.cant += cant;
                return copyItem;
                }
                else 
                return cartItem;

            })
                setCart(newCart);
    } 
    else{
        const newItem = {...productos, cant};
        setCart([...cart, newItem]);
    }
}

// Revisamos si el item está en el cart

const isInCart = (id) => {
    return cart.some((producto) => producto.id === id);
  };

  const estaEnCarrito = (id) => {
    return cart.some((producto) => producto.id === id);
  };

// Obtenemos un item específico del cart

  const getItemFromCart = (id) => {
    return cart.find((producto) => producto.id === id);
  };

// Leemos la cantidad de unidades del item específico

const getItemQuantity = (id) => {
    const item = getItemFromCart(id);
    return item ? item.cant : 0;
  };


// Obtenemos el precio total del carrito

    function precioTotal() {
        let total = 0;
        cart.map ( (i) => total += i.price * i.cant );
        return total;
      }

    function itemsTotal() {
        let cantidad = 0;
        cart.map(i => cantidad += i.cant);
        return cantidad;
      }

// Removemos un item del cart

    const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter(item =>{
        return item.id !== id;
    });
    setCart(cartFilter);
    }

 // Vaciamos el cart   
    const clearCart = () => {
        setCart([]);
    }

    const contextFunction = () => {}
return (
    <Provider value={ { contextFunction, estaEnCarrito, cart, addToCart, removeFromCart, clearCart, isInCart, getItemFromCart, getItemQuantity, precioTotal, itemsTotal } }>
    {children}
    </Provider>

)

}

export default useCartContext;