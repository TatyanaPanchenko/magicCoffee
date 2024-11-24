import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "../Pages/StartPage/StartPage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import AuthPage from "../Pages/AuthPage/AuthPage";
import RegPage from "../Pages/RegPage/RegPage";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import OrderPage from "../Pages/OrderPage/OrderPage";

export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <Routes>
      <Route path="/start" element={<StartPage />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
      <Route path="/auth" element={<AuthPage setAuth={setAuth} />}></Route>
      <Route path="/reg" element={<RegPage setAuth={setAuth} />}></Route>
      <Route path="/" element={<WelcomePage auth={auth} />}></Route>
      <Route path="/order" element={<OrderPage auth={auth} />}></Route>
    </Routes>
  );
}
