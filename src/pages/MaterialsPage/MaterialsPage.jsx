import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MaterialsPage.scss";

const SERVER_URL = "http://localhost:8080";

function MaterialsPage() {
  const { id } = useParams();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    // Fetch materials based on the category ID
    fetch(`${SERVER_URL}/materials`)
      .then((response) => response.json())
      .then((data) => {
        // Filter materials based on the category ID
        const filteredMaterials = data.filter((material) =>
          material.category_ids.includes(parseInt(id))
        );
        setMaterials(filteredMaterials);
      });
  }, [id]);

  return (
    <div className="materials-page">
      <h1>Materials Page</h1>
      <p>Materials for Category ID: {id}</p>

      <div className="materials-list">
        {materials.map((material) => (
          <div key={material.id} className="material-item">
            <h3>{material.name}</h3>
            <p>{material.description}</p>
            {/* Add other material details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialsPage;
