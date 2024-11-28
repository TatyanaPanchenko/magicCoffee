import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  incCurrentItem,
  decCurrentItem,
} from "../../store/slice/CurrentItemSlice";
import { addItemCart } from "../../store/slice/CartSlice";
import style from "./orderPage.module.scss";

export default function OrderPage() {
  const navigate = useNavigate();
  const getCurrentItem = useSelector((state) => state.currentItem.currentItem);
  const dispatch = useDispatch();
  const addActiveStyle = (e) => {
    if (e.target.classList.contains("active") === true) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  };
  return (
    <div className={style["order-inner"]}>
      <div className={style["order-top"]}>
        <NavLink to="/menu">
          <div className={style["order-back"]}></div>
        </NavLink>
        <div className={style["order-title"]}>Order</div>
      </div>
      <div className={style["order-img"]}>
        <img
          src={`./src/assets/coffee/coffee_${getCurrentItem.name}.png`}
          alt={getCurrentItem.name}
        />
      </div>
      <div className={style["order-info"]}>
        <div className={style["order-info-item"]}>
          <div className={style["order-name"]}>{getCurrentItem.name}</div>
          <div className={style["order-count"]}>
            <span
              onClick={() => {
                dispatch(decCurrentItem(getCurrentItem));
              }}
            >
              -
            </span>
            {getCurrentItem.count}
            <span
              onClick={() => {
                dispatch(incCurrentItem(getCurrentItem));
              }}
            >
              +
            </span>
          </div>
        </div>
        <div className={style["order-info-item"]}>
          <div className={style["order-ristertto"]}>Ristretto</div>
          <div className={style["order-choose"]}>
            <span
              onClick={(e) => {
                addActiveStyle(e);
              }}
            >
              One
            </span>
            <span
              onClick={(e) => {
                addActiveStyle(e);
              }}
            >
              Two
            </span>
          </div>
        </div>
        <div className={style["order-info-item"]}>
          <div className={style["order-where"]}>Onsite / Takeaway</div>
          <div className={style["order-choose"]}>
            <span
              onClick={(e) => {
                addActiveStyle(e);
              }}
            >
              Onsite
            </span>{" "}
            <span
              onClick={(e) => {
                addActiveStyle(e);
              }}
            >
              {getCurrentItem.where}
            </span>
          </div>
        </div>
        <div className={style["order-info-item"]}>
          <div className={style["order-volume"]}>Volume, ml</div>
          <div className={style["order-choose"]}>
            <span
              onClick={(e) => {
                addActiveStyle(e);
              }}
            >
              {getCurrentItem.volume}
            </span>
            <span
              onClick={(e) => {
                addActiveStyle(e);
              }}
            >
              350
            </span>
            <span
              onClick={(e) => {
                addActiveStyle(e);
              }}
            >
              450
            </span>
          </div>
        </div>
      </div>
      <div className={style["order-price"]}>
        <span>Total Amount</span>{" "}
        <span>BYN {getCurrentItem.price * getCurrentItem.count},00</span>
      </div>
      <div
        onClick={() => {
          dispatch(addItemCart(getCurrentItem));
          navigate("/cart");
        }}
        className={style["order-button"]}
      >
        Add to cart
      </div>
    </div>
  );
}
