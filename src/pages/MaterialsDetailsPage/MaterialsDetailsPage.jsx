import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./MaterialsDetailsPage.scss";

const SERVER_URL = "http://localhost:8080";
const MATERIALS_JSON_URL = "http://localhost:8080/materials";

function MaterialsDetailsPage() {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch material details based on the id from materials.json
    const fetchMaterialDetails = async () => {
      try {
        const response = await fetch(MATERIALS_JSON_URL);
        const data = await response.json();
        const selectedMaterial = data.find(
          (item) => item.id === parseInt(id, 10)
        );

        if (selectedMaterial) {
          setMaterial(selectedMaterial);
        } else {
          console.error("Material not found");
        }
      } catch (error) {
        console.error("Error fetching material details", error);
      }
    };

    fetchMaterialDetails();
  }, [id]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    // Implement logic to add material and quantity to the cart
    console.log(`Added ${quantity} ${material.name}(s) to the cart.`);
  };

  return (
    <div>
      {material ? (
        <div className="mdetails">
          <img
            className="mdetails__img"
            src={material.image}
            alt={material.name}
          />
          <section className="mdetails__info">
            <h3 className="mdetails__title">{material.name}</h3>

            <p className="mdetails__price">
              <strong>Price: </strong>
              {material.price}
            </p>

            <p className="mdetails__dimensions">
              <strong>Dimensions: </strong>
              {material.dimensions}
            </p>
            <p className="mdetails__required">
              <strong>Required: </strong>
              {material.required}
            </p>
            <p className="mdetails__weight">
              <strong>Weight: </strong>
              {material.weight}
            </p>
            <p className="mdetails__category">
              <strong>Category: </strong>
              {material.category.join(", ")}
            </p>
            <p className="mdetails__colors">
              <strong>Colors: </strong>
              {material.colors.join(", ")}
            </p>
            <p className="mdetails__description">
              <strong>Description: </strong>
              {material.description}
            </p>
            <h3 className="mdetails__quantity-title">Quantity</h3>

            <div className="mdetails__quantity-control">
              <button
                className="mdetails__quantity-btn-left"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                className="mdetails__quantity-input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min={1}
              />
              <button
                className="mdetails__quantity-btn-right"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <p className="mdetails__order-quantity">
              Min Order Quantity:
              {material.min_order_quantity}
            </p>

            <Link
              to="/addedtocart"
              className="mdetails__button"
              onClick={addToCart}
            >
              Add to Cart
            </Link>
            <Link
              to="/cart"
              className="mdetails__secondary-button"
              onClick={addToCart}
            >
              Buy Now
            </Link>
            <Link to="/getquote" className="mdetails__quote-request">
              Request a Quote for Wholesale Orders
            </Link>
          </section>
        </div>
      ) : (
        <p>Loading material details...</p>
      )}
    </div>
  );
}

export default MaterialsDetailsPage;
