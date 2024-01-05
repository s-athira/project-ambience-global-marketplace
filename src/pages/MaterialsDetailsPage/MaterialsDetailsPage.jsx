import React from "react";
import { useParams } from "react-router-dom";
import "./MaterialsDetailsPage.scss";

const SERVER_URL = "http://localhost:8080";

function MaterialsDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Materials Details Page</h2>
      <p>Material ID: {id}</p>
      {/* Add your material details rendering logic here */}
    </div>
  );
}

export default MaterialsDetailsPage;
