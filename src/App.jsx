import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

const SERVER_URL = "http://localhost:8080";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/categories" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
