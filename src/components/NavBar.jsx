import React, { useState } from "react";
import Cart from "./Cart";

const imgPath = process.env.PUBLIC_URL + "/assets/images/";

const NavBar = ({ products }) => {
  const [menuState, setMenuState] = useState(false);

  const classes = !menuState ? "nav container" : "nav container open";
  return (
    <div className={classes}>
      <div className="overlay"></div>
      <div className="burger-menu" onClick={() => setMenuState(!menuState)}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <a href="#" className="logo">
        <img src={`${imgPath}logo.svg`} alt="sneakers logo" />
      </a>
      <nav>
        <ul className="nav__menu">
          <li className="nav__item">collections</li>
          <li className="nav__item">men</li>
          <li className="nav__item">women</li>
          <li className="nav__item">about</li>
          <li className="nav__item">contact</li>
        </ul>
      </nav>
      <div className="nav__profile">
        <Cart item={products} />
        <a href="#" className="profile">
          <img src={`${imgPath}image-avatar.png`} alt="profile avatar" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
