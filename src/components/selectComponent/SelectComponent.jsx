import React from "react";
import styles from "./SelectComponent.module.css";

export function SelectComponent() {
  return (
    <div className={styles.select_container}>
    <span>Фильтровать по</span>
      <select className={styles.select_container__select_block}>
        <option value="">Возрастанию</option>
        <option value="">Убыванию</option>
      </select>
    </div>
  );
}