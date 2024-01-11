import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
import "./AddedtoCartPage.scss";

const SERVER_URL = "http://localhost:8080";

function AddedtoCartPage() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    const parsedCart = JSON.parse(storageCart);
    console.log(parsedCart);
    setCart(parsedCart);
  }, []);
  return (
    <>
      {cart.map((item) => {
        return (
          <p>
            {item.material.image}
            <img
              src={material.image}
              alt={material.name}
              className="cart__image"
            />
          </p>
        );
      })}
    </>
  );
}

export default AddedtoCartPage;
