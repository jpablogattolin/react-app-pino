import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CardWidget";
import styles from "../Navbar/navbar.modules.css";


const Navbar = () => {

  return (

    <><nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="componente">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

              <Link to="/home" className="nav-link active" aria-current="page" >
                <h2>HOME</h2>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/productos" className="nav-link active" aria-current="page" >
                <h2>PRODUCTOS</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
    </>


  )
};

export default Navbar;