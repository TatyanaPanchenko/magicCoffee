import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CoffeeCart from "../../Components/CoffeeCart/CoffeeCart";
import style from "./menuPage.module.scss";
import { setCoffee } from "../../store/slice/CoffeeSlice";
import { getCoffee } from "../../services/dataBase.js";
export default function MenuPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCoffeeBase = getCoffee();
    getCoffeeBase.then((result) => {
      dispatch(setCoffee(result));
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
            {getCoffeeStore.length === 0 ? (
              <div>К сожалению, в данной категории ничего нет.</div>
            ) : (
              <CoffeeCart />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
