import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CappuccinoPage from "../Pages/CappuccinoPage/CappuccinoPage";
import LattePage from "../Pages/LattePage/LattePage";
import RafPage from "../Pages/RafPage/RafPage";
import Header from "../Components/Header/Header";
import "./App.css";

export default function App() {
  //  const obj = {auth:false};
  // const navigate = useNavigate();
  // if (!obj.auth) {
  // navigate("/login");
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cappuccino" element={<CappuccinoPage />} />
          <Route path="/latte" element={<LattePage />} />
          <Route path="/raf" element={<RafPage />} />
        </Routes>
      </main>
    </>
  );
}
