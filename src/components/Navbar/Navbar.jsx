import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CardWidget";

const Navbar = () => {

    return (
            <div>
                <nav class="navbar bg-dark" data-bs-theme="dark">

                    <ul>
                        <li>
                            <Link to="/home">HOME</Link>
                            <Link to="/products">PRODUCTOS</Link>
                        </li>
                    </ul>
  
                </nav>

                    <CartWidget />
            </div>
            
       

   )
};

export default Navbar;