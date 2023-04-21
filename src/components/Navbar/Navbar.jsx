import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CardWidget";
import styles from "../Navbar/Navbar.modules.css";

const Navbar = () => {

    return (
            <div className="titulo">
                
                    <Link to="/home">
                        <h2>HOME</h2>
                    </Link>
                    <Link to="/productos">
                        <h2>PRODUCTOS</h2>
                    </Link>
               

                    <CartWidget />
            </div>
            
       

   )
};

export default Navbar;