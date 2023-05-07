import React from 'react';

import {LinkContainer} from 'react-router-bootstrap';

import useCartContext from '../Store/CartContext';

function CartWidget(props) {
  const { itemsTotal } = useCartContext();
  return (
<LinkContainer to="/cart" className="text-dark">
<div>
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
      { itemsTotal()? <div className="mostrar-cantidad">{itemsTotal()}</div>
      : <div className="mostrar-cantidad2">{itemsTotal()}</div> }

    </div>
</LinkContainer>
);
}
export default CartWidget;