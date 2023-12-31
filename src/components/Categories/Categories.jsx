import React, { useEffect, useState } from "react";
import "./Categories.scss";

function CategoryItem({ id, name, image, index }) {
  const isEven = (index + 1) % 2 === 0;

  return (
    <div className="categories__container">
      {isEven && (
        <img src={image} alt={name} className="categories__cover-image-right" />
      )}
      <h2 className="categories__title">{name}</h2>
      {!isEven && (
        <img src={image} alt={name} className="categories__cover-image-left" />
      )}
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
      {categories.map((category, index) => (
        // Use renamed CategoryItem component here
        <CategoryItem key={category.id} index={index} {...category} />
      ))}
    </div>
  );
}

export default Categories;
