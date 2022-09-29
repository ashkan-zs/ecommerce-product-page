import React, { useState } from "react";

const Cart = ({ item }) => {
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
          {item.counter > 0 ? (
            <div className="cart__item">
              <div className="cart__item-container">
                <img
                  className="cart__item-img"
                  src={`${imgPath}${item.imgUrl}`}
                  alt="product"
                />
                <div className="cart__item-body">
                  <h4 className="title">{item.title}</h4>
                  <span>
                    ${item.price} x {item.counter}
                    <strong> ${(item.price * item.counter).toFixed(2)}</strong>
                  </span>
                </div>
                <img
                  src={`${imgPath}icon-delete.svg`}
                  alt="delete cart item"
                  className="delete-item"
                  onClick={() => (item.counter = 0)}
                />
              </div>
              <button className="btn">Checkout</button>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
