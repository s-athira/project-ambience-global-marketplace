import React, { useEffect, useState } from "react";
import "./Categories.scss";

// Rename inner Categories to CategoryItem
function CategoryItem({ id, name, image }) {
  return (
    <div className="categories__container">
      <h2 className="categories__title">{name}</h2>
      <img src={image} alt={name} className="categories__cover-image" />
    </div>
  );
}

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      {categories.map((category) => (
        // Use renamed CategoryItem component here
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}

export default Categories;
