import React from "react";
import "./MaterialsItem.scss"; // Import your styles if needed

function MaterialsItem({ material }) {
  return (
    <div className="material-item">
      <h3>{material.name}</h3>
      <p>{material.description}</p>
      {/* Add other material details as needed */}
    </div>
  );
}

export default MaterialsItem;
