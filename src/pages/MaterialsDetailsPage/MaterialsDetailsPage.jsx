import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./MaterialsDetailsPage.scss";

const SERVER_URL = "http://localhost:8080";
const MATERIALS_JSON_URL = "http://localhost:8080/materials";

function MaterialsDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [material, setMaterial] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false); // Set loading to false regardless of success/failure
      }
    };

    fetchMaterialDetails();
  }, [id]);

  const addToCart = () => {
    console.log("Adding to cart:", material, quantity);

    if (loading) {
      console.log("Material details are still loading. Please wait.");
      return;
    }

    const totalPrice = material.price * quantity;

    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new item to the cart
    const updatedCart = [...existingCart, { material, quantity, totalPrice }];

    // Update localStorage with the new cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Navigating to /cart with state:", { material, quantity });

    // Navigate to the cart page with state
    navigate("/cart", { state: { material, quantity } });
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
          <section className="mdetails__more-imgs-container">
            {material.more_images.map((image, index) => (
              <img
                key={index}
                className="mdetails__more-imgs"
                src={image}
                alt={`${material.name} - Image ${index + 2}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </section>

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
              onClick={() => addToCart()}
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
