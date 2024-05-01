import React from "react";
import styles from "./InputComponent.module.css";

export function InputComponent({ userName, setUserName }) {
  return (
    <input
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      className={styles.input}
      type="text"
      placeholder="Введите имя пользователя"
    />
  );
}
