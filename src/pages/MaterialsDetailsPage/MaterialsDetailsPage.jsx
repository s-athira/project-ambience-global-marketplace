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
      <h2>Materials Details Page</h2>
      {material ? (
        <div>
          <h3>{material.name}</h3>
          <img src={material.image} alt={material.name} />
          <p>Dimensions: {material.dimensions}</p>
          <p>Required: {material.required}</p>
          <p>Weight: {material.weight}</p>
          <p>Category: {material.category.join(", ")}</p>
          <p>Colors: {material.colors.join(", ")}</p>
          <p>Min Order Quantity: {material.min_order_quantity}</p>
          <p>Description: {material.description}</p>
          {/* Add additional material details as needed */}
        </div>
      ) : (
        <p>Loading material details...</p>
      )}
    </div>
  );
}

export default MaterialsDetailsPage;
