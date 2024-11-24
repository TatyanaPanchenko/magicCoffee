import React from "react";
import { NavLink } from "react-router-dom";
import MenuPage from "../../Pages/MenuPage/MenuPage";
import style from "./startPage.module.scss";

export default function StartPage() {
  return (
    <>
      <div className={style["startpage-top"]}></div>
      <div className={style["startpage"]}>
        <NavLink to="/menu">
          <div className={style["startpage-logo"]}></div>
        </NavLink>
      </div>
    </>
  );
}
