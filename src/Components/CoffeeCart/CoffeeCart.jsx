import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderPage from "../../Pages/OrderPage/OrderPage";
import style from "./coffeeCart.module.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const getCoffeeStore = useSelector((state) => state.coffee);
  return (
    <>
      {getCoffeeStore.map((item, index) => {
        return (
          <div
            className={style["coffee-item"]}
            key={index}
            onClick={() => {
              navigate(`/order`);
            }}
          >
            <div className={style["coffee-img"]}>
              <img
                src={`./src/assets/coffee/coffee${index}.png`}
                alt={item.name}
              />
            </div>
            <div className={style["coffee-name"]}>{item.name}</div>
          </div>
        );
      })}
    </>
  );
}
