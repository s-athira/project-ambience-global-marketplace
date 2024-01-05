import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MaterialsDetailsPage.scss";

const SERVER_URL = "http://localhost:8080";
const MATERIALS_JSON_URL = "http://localhost:8080/materials";

function MaterialsDetailsPage() {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);

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
            <p className="mdetails__order-quantity">
              <strong>Min Order Quantity: </strong>
              {material.min_order_quantity}
            </p>
            <p className="mdetails__description">
              <strong>Description: </strong>
              {material.description}
            </p>
            {/* Add additional material details as needed */}
          </section>
        </div>
      ) : (
        <p>Loading material details...</p>
      )}
    </div>
  );
}

export default MaterialsDetailsPage;
