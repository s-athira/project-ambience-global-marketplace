// Header.jsx

import React from "react";
import "./Header.scss";
import menuIcon from "../../assets/icons/menu-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";

const Header = () => {
  return (
    <header className="header__container">
      <img
        src={menuIcon}
        alt="burger menu icon"
        className="header__menu-icon"
      />
      <img src={cartIcon} alt="cart icon" className="header__cart-icon" />
    </header>
  );
};

export default Header;
