import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductList from "../ProductList";

export const ItemListContainer = ({
    greeting }) => {

        const [productos, setProductos] = useState ([])

        useEffect(() => {
          fetch("https://fakestoreapi.com/products")
          .then (response => response.json())
          .then (data => {
            setProductos (data)
          })
        }, [])

        return (
            <div>
                <h2 ClassName="text-success">
                    {greeting}
                </h2>
                <ProductList productos={productos} />
            </div>
        )
    }

export default ItemListContainer;