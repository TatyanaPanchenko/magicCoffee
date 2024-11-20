import React from "react";

export default function Latte() {
  return (
    <div className={style["latte-item"]}>
      <div className={style["latte-img"]}>
        <img src={item.src} alt={item.name} />
      </div>
      <div className={style["latte-name"]}>{item.name}</div>
    </div>
  );
}
