import React from "react";
import "./Header.scss";
import menuIcon from "../../assets/icons/menu-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header__container">
      <img
        src={menuIcon}
        alt="burger menu icon"
        className="header__menu-icon"
      />
      <Link to={`/categories`} className="home-page__link">
        <h2 className="header__logo">.a</h2>
      </Link>
      <img src={cartIcon} alt="cart icon" className="header__cart-icon" />
    </header>
  );
};

export default Header;
