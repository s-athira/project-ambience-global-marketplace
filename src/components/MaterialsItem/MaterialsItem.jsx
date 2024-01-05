import React from "react";
import "./MaterialsItem.scss";
import { Link } from "react-router-dom";

function MaterialsItem({ material }) {
  return (
    <Link
      to={`/materialdetails/${material.id}`}
      className="materialdetails__link"
    >
      <div className="material-item">
        <img
          src={material.image}
          alt={material.name}
          className="material-item__img"
        />
        <h3 className="material-item__title">{material.name}</h3>
        <p className="material-item__description">{material.description}</p>
        {/* Add other material details if needed */}
      </div>
    </Link>
  );
}

export default MaterialsItem;
