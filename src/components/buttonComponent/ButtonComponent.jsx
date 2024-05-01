import React from "react";
import styles from "./Button.module.css"

export function ButtonComponent({ children, onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles.button}>{children}</button>
    </>
  );
}
