import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CartPage.scss";

const SERVER_URL = "http://localhost:8080";

const CartPage = () => {
  const location = useLocation();
  console.log("Location Object:", location);

  const { material, quantity } = location.state || {
    material: null,
    quantity: 0,
  };
  const totalPrice =
    new URLSearchParams(location.search).get("totalPrice") || 0;

  console.log("Location State:", location.state);

  if (!material) {
    // Material is not defined, handle this case (e.g., redirect to another page)
    console.error("Material not found in cart state");
    // You may want to navigate to another page or display an error message.
    return (
      <div>
        <p>Error: Material not found in the cart.</p>
        {/* You can add additional logic or redirect the user */}
      </div>
    );
  }

  return (
    <div>
      <div className="cart">
        <h3 className="cart__title">Order Summary</h3>
        {/* Display material details and quantity as needed */}
        <>
          <img className="cart__img" src={material.image} alt={material.name} />
          <h3 className="cart__material-name">{material.name}</h3>
          <section className="cart__quantity-price-container">
            <p className="cart__selected-quantity">Quantity ({quantity})</p>
            <h3 className="cart__selected-price">{`$${material.price}`}</h3>
          </section>
        </>
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
          <p className="cart__subtotal-amount">$100.00</p>
          <p className="cart__shipping-amount">$20.00</p>
          <p className="cart__tax-amount">$7.00</p>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
