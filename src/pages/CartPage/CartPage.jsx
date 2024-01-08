import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./CartPage.scss";

const SERVER_URL = "http://localhost:8080";

function CartPage() {
  const { id } = useParams();
  const location = useLocation();
  const addToCart = () => {
    // Extract material details from the URL parameters
    const searchParams = new URLSearchParams(location.search);
    const quantity = searchParams.get("quantity");

    // Log or update state with the selected material details
    console.log(`Material ID: ${id}, Quantity: ${quantity}`);
  };

  return (
    <div>
      <div className="cart">
        <h3 className="cart__title">Order Summary</h3>
        <img className="cart__img" src="image" alt="name" />
        <h3 className="cart__material-name">Material name</h3>
        <section className="cart__quantity-price-container">
          <p className="cart__selected-quantity">Quantity (1)</p>
          <h3 className="cart__selected-price">$100</h3>
        </section>
        <section className="cart__button-container">
          <Link
            to="/shopmore"
            className="cart__secondary-button"
            onClick={addToCart}
          >
            Shop More
          </Link>
          <Link
            to={`/checkout/${id}`}
            className="cart__button"
            onClick={addToCart}
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
}

export default CartPage;
