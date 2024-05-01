import React from "react";
import styles from "../ModalComponent/ModalComponent.module.css";

export function ModalComponent({isVisible}) {
  return (
    <>
      <div className={`${styles.modal_block} ${isVisible ? styles.show : ""}`}>
      <div className={styles.icon_close}>X</div>
        ModalComponent
        </div>
    </>
  )
}
