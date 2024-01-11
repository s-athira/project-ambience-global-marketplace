import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartPage.scss";

const SERVER_URL = "http://localhost:8080";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    const parsedCart = JSON.parse(storageCart);
    console.log(parsedCart);
    setCart(parsedCart);
  }, []);

  return (
    <>
      {cart.map((item) => (
        <div className="cart" key={item.material.id}>
          <h3 className="cart__title">Order Summary</h3>

          <img
            src={item.material.image}
            alt={item.material.name}
            className="cart__image"
          />

          <h3 className="cart__material-name">{item.material.name}</h3>
          <section className="cart__quantity-price-container">
            <p className="cart__selected-quantity">{`Quantity (${item.quantity})`}</p>
            <h3 className="cart__selected-price">{`${item.material.price}`}</h3>
          </section>
          <section className="cart__button-container">
            <Link
              to={`/categories`}
              className="cart__secondary-button"
              onClick={() => {
                // Handle Shop More button click
                console.log("Shop More clicked");
              }}
            >
              Shop More
            </Link>
          </section>
          <section className="cart__subtotal-container">
            <p className="cart__subtotal-title">Subtotal</p>
            <p className="cart__subtotal-amount">{item.material.price}</p>
          </section>
          <section className="cart__shipping-container">
            <p className="cart__shipping-title">Shipping</p>
            <p className="cart__shipping-amount">$20.00</p>
          </section>
          <section className="cart__tax-container">
            <p className="cart__tax-title">Tax</p>
            <p className="cart__tax-amount">$7.00</p>
          </section>
          <section className="cart__total-container">
            <p className="cart__total-title">Total</p>
            <p className="cart__total-amount">$39.99</p>
          </section>
          <Link
            to="/checkout"
            className="cart__button"
            onClick={() => {
              // Handle Proceed to Pay button click
              console.log("Proceed to Pay clicked");
            }}
          >
            Proceed to Pay
          </Link>
        </div>
      ))}
    </>
  );
}

export default CartPage;
