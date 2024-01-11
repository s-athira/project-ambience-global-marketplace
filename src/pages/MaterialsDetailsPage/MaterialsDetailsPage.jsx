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
  const handleImageClick = (index) => {
    // Move the clicked image to the end of the array
    const updatedMoreImages = [...material.more_images];
    const clickedImage = updatedMoreImages.splice(index, 1)[0];
    updatedMoreImages.push(material.image);
    setMaterial((prevMaterial) => ({
      ...prevMaterial,
      image: clickedImage,
      more_images: updatedMoreImages,
    }));
  };

  const addToCart = () => {
    // Get items from local storage and parse them into JavaScript
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    if (cartItems) {
      // Add the current item to our cart
      cartItems.push({ material, quantity });
      console.log(cartItems);

      // Set the localStorage to the updated cart
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.setItem("cart", JSON.stringify([{ material, quantity }]));
    }

    navigate("/cart");
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

            <button
              to="/addedtocart"
              className="mdetails__button"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button
              to="/cart"
              className="mdetails__secondary-button"
              onClick={addToCart}
            >
              Buy Now
            </button>
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
