import React from "react";
import { useSelector } from "react-redux";
import style from "./lattePage.module.scss";

export default function LattePage() {
  const getLatteStore = useSelector((state) => state.latte);
  if (getLatteStore.length === 0) {
    return <div>К сожалению, в данной категории ничего нет.</div>;
  }
  //  return    {getLatteStore.map((item, index) => {
  //               return (
  //                 <div className={style["coffee-item"]}>
  //                   <div className={style["coffee-img"]}>
  //                     <img src={} alt={item.name} />
  //                   </div>
  //                   <div className={style["coffee-name"]}>{item.name}</div>
  //                 </div>
  //               );
  //             })};
}
