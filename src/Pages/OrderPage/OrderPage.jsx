import React from "react";
import { NavLink } from "react-router-dom";
import style from "./orderPage.module.scss";

export default function OrderPage() {
  return (
    <div className={style["order-inner"]}>
      <div className={style["order-top"]}>
        <NavLink to="/menu">
          <div className={style["order-back"]}></div>
        </NavLink>
        <div className={style["order-title"]}>Order</div>
        <div className={style["order-cart"]}></div>
      </div>
      <div className={style["order-info"]}>
        <div className={style["order-info-item"]}>
          <div className={style["order-name"]}>Cappuccino</div>
          <div className={style["order-count"]}>1</div>
        </div>
        <div className={style["order-info-item"]}>
          <div className={style["order-ristertto"]}>Ristretto</div>
          <div className={style["order-choose"]}>
            <span>One</span> <span>Two</span>
          </div>
        </div>
        <div className={style["order-info-item"]}>
          <div className={style["order-where"]}>Onsite / Takeaway</div>
          <div className={style["order-choose"]}>
            <span></span> <span></span>
          </div>
        </div>
        <div className={style["order-info-item"]}>
          <div className={style["order-volume"]}>Volume, ml</div>
          <div className={style["order-choose"]}>
            <span>250</span> <span>350</span> <span>450</span>
          </div>
        </div>
      </div>
      <div className={style["order-price"]}>
        <span>Total Amount</span> <span>BYN 3.00</span>
      </div>
    </div>
  );
}
