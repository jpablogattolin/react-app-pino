import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return  (
        <div>
            <FaShoppingCart size={"1.5rem"} color={"blue"} />
            <p className="counter">0</p>
        </div>
    )
}

export default CartWidget;