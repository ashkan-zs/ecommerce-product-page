import React, { useState } from "react";
import Gallery from "./Gallery";

const Product = (props) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (e) => {
    setCounter(counter + 1);
  };
  const handleDecrement = (e) => {
    setCounter(counter - 1);

    if (counter <= 0) {
      setCounter(0);
    }
  };

  return (
    <div className="container product">
      <Gallery />
      <div className="content">
        <div className="content__company-name">Sneaker Company</div>
        <div className="content__header">Fall Limited Edition Sneakers</div>
        <div className="content__desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </div>
        <div className="price-container">
          <div className="price">125.00</div>
          <div className="badge">50%</div>
          <div className="price price--off">250.00</div>
        </div>
        <div className="content__action">
          <div className="counter">
            <button className="btn btn--icon" onClick={handleDecrement}>
              -
            </button>
            <div className="count">{counter}</div>
            <button className="btn btn--icon" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;