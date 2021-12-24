import React from "react";

const imgPath = process.env.PUBLIC_URL + "/assets/images/";

const NavBar = (props) => {
  return (
    <div className="nav container">
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
        <a href="#" className="cart">
          <img src={`${imgPath}icon-cart.svg`} alt="cart icon" />
        </a>
        <a href="#" className="profile">
          <img src={`${imgPath}image-avatar.png`} alt="profile avatar" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
