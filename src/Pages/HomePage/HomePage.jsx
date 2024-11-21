import React from "react";
import { useSelector } from "react-redux";
import style from "./homePage.module.scss";

export default function HomePage() {
  const getCoffeeStore = useSelector((state) => state.coffee);

  if (getCoffeeStore.length === 0) {
    return <div>К сожалению, в данной категории ничего нет.</div>;
  }
  {
    getCoffeeStore.map((item) => {
      return (
        <div className={style["coffee-item"]}>
          <div className={style["coffee-img"]}>
            <img src={item.img} alt={item.name} />
          </div>
          <div className={style["coffee-name"]}>{item.name}</div>
        </div>
      );
    });
  }
}
