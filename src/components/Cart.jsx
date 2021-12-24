import React, { useState } from "react";

const Cart = ({ items }) => {
  const imgPath = process.env.PUBLIC_URL + "/assets/images/";
  const [isOpen, setIsOpen] = useState(false);
  const cartClass = isOpen ? "cart open" : "cart";

  return (
    <div className={cartClass}>
      <a href="#" onClick={() => setIsOpen(!isOpen)}>
        <img src={`${imgPath}icon-cart.svg`} alt="cart icon" />
      </a>
      <div className="cart__container">
        <header className="cart__header">
          <h2>Cart</h2>
        </header>
        <div className="cart__content">
          {items.length > 0 ? <p>Carts</p> : <p>Your cart is empty.</p>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
