import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import MaterialsPage from "./pages/MaterialsPage/MaterialsPage";
import MaterialsDetailsPage from "./pages/MaterialsDetailsPage/MaterialsDetailsPage";
import AddedtoCartPage from "./pages/AddedtoCartPage/AddedtoCartPage";
import CartPage from "./pages/CartPage/CartPage";
import GetquotePage from "./pages/GetquotePage/GetquotePage";

const SERVER_URL = "http://localhost:8080";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/categories" element={<HomePage />} />
        <Route path="/materials/:id" element={<MaterialsPage />} />
        <Route path="/materialdetails/:id" element={<MaterialsDetailsPage />} />
        <Route path="/addedtocart" element={<AddedtoCartPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/getquote" element={<GetquotePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
