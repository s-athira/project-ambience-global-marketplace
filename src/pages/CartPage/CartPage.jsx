import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Don't forget to import Link
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
          <p>
            <img
              src={item.material.image}
              alt={item.material.name}
              className="cart__image"
            />
          </p>
          <h3 className="cart__material-name">{item.material.name}</h3>
          <section className="cart__quantity-price-container">
            <p className="cart__selected-quantity">{`Quantity (${item.material.quantity})`}</p>
            <h3 className="cart__selected-price">{`$${item.material.price}`}</h3>
          </section>
          <section className="cart__button-container">
            <Link
              to="/shopmore"
              className="cart__secondary-button"
              onClick={() => {
                // Handle Shop More button click
                console.log("Shop More clicked");
              }}
            >
              Shop More
            </Link>
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
          </section>
          <section className="cart__subtotal-container">
            <p className="cart__subtotal-title">Subtotal</p>
            <p className="cart__subtotal-amount">{item.material.price}</p>
            <p className="cart__subtotal-title">Shipping</p>
            <p className="cart__shipping-amount">$20.00</p>
            <p className="cart__subtotal-title">Total</p>
            <p className="cart__tax-amount">$7.00</p>
          </section>
        </div>
      ))}
    </>
  );
}

export default CartPage;
