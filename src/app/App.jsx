import React from "react";
import { useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HomePage from "../Pages/HomePage/HomePage";
import CappuccinoPage from "../Pages/CappuccinoPage/CappuccinoPage";
import LattePage from "../Pages/LattePage/LattePage";
import RafPage from "../Pages/RafPage/RafPage";
import Header from "../Components/Header/Header";
import {
  getCoffee,
  getCappuccino,
  getLatte,
  getRaf,
} from "../services/dataBase.js";
import style from "./app.module.scss";
import { setCoffee } from "../store/slice/CoffeeSlice";
import { setCappuccino } from "../store/slice/CappuccinoSlice";
import { setLatte } from "../store/slice/LatteSlice";
import { setRaf } from "../store/slice/RafSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCoffeeBase = getCoffee();
    const getCappuccinoBase = getCappuccino();
    const getLatteBase = getLatte();
    const getRafBase = getRaf();
    Promise.allSettled([
      getCoffeeBase,
      getCappuccinoBase,
      getLatteBase,
      getRafBase,
    ]).then((results) => {
      if (results[0].status === "fulfilled") {
        results[0].value.map((item) => {
          dispatch(setCoffee(item));
        });
      }
      if (results[1].status === "fulfilled") {
        results[1].value.map((item) => {
          dispatch(setCappuccino(item));
        });
      }
      if (results[2].status === "fulfilled") {
        results[2].value.map((item) => {
          dispatch(setLatte(item));
        });
      }
      if (results[3].status === "fulfilled") {
        results[3].value.map((item) => {
          dispatch(setRaf(item));
        });
      }
    });
  }, []);
  const getCoffeeStore = useSelector((state) => state.coffee);
  return (
    <div className={style.container}>
      <Header />
      <main>
        <div className={style["main-container"]}>
          <div className={style["main-title"]}>Select your coffee</div>
          <div className={style["main-carts"]}>
            {getCoffeeStore.map((item, index) => {
              return (
                <div className={style["coffee-item"]} key={index}>
                  <div className={style["coffee-img"]}>
                    <img src={`./assets/coffee/.png`} alt={item.name} />
                  </div>
                  <div className={style["coffee-name"]}>{item.name}</div>
                </div>
              );
            })}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cappuccino" element={<CappuccinoPage />} />
              <Route path="/latte" element={<LattePage />} />
              <Route path="/raf" element={<RafPage />} />
            </Routes>
          </div>
        </div>
      </main>
      <footer>
        <div className={style["footer-container"]}>
          <div className={style["footer-icons"]}>
            <NavLink to="/">
              <div className={style["footer-icon-home"]}></div>
            </NavLink>
            <div className={style["footer-icon-gift"]}></div>
            <div className={style["footer-icon-about"]}></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
