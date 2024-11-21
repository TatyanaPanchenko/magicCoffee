import React from "react";
import { useSelector } from "react-redux";

export default function RafPage() {
  const getRafStore = useSelector((state) => state.raf);
  if (getRafStore.length === 0) {
    return <div>К сожалению, в данной категории ничего нет.</div>;
  }
  return (
    <div>
      {getRafStore.map((item) => {
        return (
          <div className={style["coffee-item"]}>
            <div className={style["coffee-img"]}>
              <img src={item.img} alt={item.name} />
            </div>
            <div className={style["coffee-name"]}>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}
