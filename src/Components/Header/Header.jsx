import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header>
        <div className={style["header-container"]}>
          <div className={style["header-greeting"]}>
            <p>Welcome!</p>
            <p className={style["header-name"]}>Alex</p>
          </div>
          <div className={style["header-icons"]}>
            <div className={style["header-cart"]}></div>
            <div className={style["header-users"]}></div>
          </div>
        </div>
      </header>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/cappuccino">Cappuccino</NavLink>
      <NavLink to="/latte">Latte</NavLink>
      <NavLink to="/raf">Raf</NavLink>
    </>
  );
}
