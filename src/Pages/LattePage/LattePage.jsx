import React from "react";
import { useSelector } from "react-redux";
import Latte from "../../Components/Latte/Latte";
import style from "./lattePage.module.scss";

export default function LattePage() {
  const latte = useSelector((state) => state.latte);
  if (latte.length === 0) {
    return <div>К сожалению, в данной категории ничего нет.</div>;
  }
  return (
    <>
      <div className={style["page-container"]}>
        <div className={style["page-inner"]}>
          <div className={style["page-carts"]}>
            {/* {latte.map((item) => {
              <Latte item={item} />;
            })} */}
            )<div className={style["page-cart"]}></div>
          </div>
        </div>
      </div>
    </>
  );
}
