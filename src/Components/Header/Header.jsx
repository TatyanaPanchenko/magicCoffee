import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";

export default function Header(props) {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cappuccino">Cappuccino</NavLink>
        <NavLink to="/latte">Latte</NavLink>
        <NavLink to="/raf">Raf</NavLink>
      </header>
    </div>
  );
}
