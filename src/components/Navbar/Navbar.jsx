import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CardWidget";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div>
                    <img src="" alt="" />
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                           <Link to ="/home" className="nav-link active"> </Link> Home
                        </li>
                        

                        <li className="nav-item dropdown">
                           
                            <ul className="dropdown-menu">
                              <li> <Link to="/products" className="dropdown-item"> </Link> PRODUCTOS</li>



                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;