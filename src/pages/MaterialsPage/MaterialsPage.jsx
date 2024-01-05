import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MaterialsPage.scss";
import MaterialsItem from "../../components/MaterialsItem/MaterialsItem";

const SERVER_URL = "http://localhost:8080";

function MaterialsPage() {
  const { id } = useParams();
  const [materials, setMaterials] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");

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

        // Fetch categories from the backend
        fetch(`${SERVER_URL}/categories`)
          .then((response) => response.json())
          .then((categories) => {
            // Find the corresponding category and set its title
            const selectedCategory = categories.find(
              (category) => category.id === parseInt(id)
            );
            if (selectedCategory) {
              setCategoryTitle(selectedCategory.name);
            }
          });
      });
  }, [id]);

  return (
    <div className="materials-page">
      <section className="materials-page__title-container">
        <h2 className="materials-page__title">{categoryTitle}</h2>
        <p className="materials-page__inspirations-link">
          Explore Design Inspirations >
        </p>
      </section>

      <div className="materials-list">
        {materials.map((material) => (
          <MaterialsItem key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
}

export default MaterialsPage;
