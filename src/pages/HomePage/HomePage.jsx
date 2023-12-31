import React from "react";
import "./HomePage.scss";
import Landing from "../../components/Landing/Landing";
import Categories from "../../components/Categories/Categories";

const SERVER_URL = "http://localhost:8080";

function HomePage() {
  return (
    <>
      <Landing />
      <Categories />
    </>
  );
}

export default HomePage;
