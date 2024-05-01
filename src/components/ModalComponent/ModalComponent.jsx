import React from "react";
import styles from "../ModalComponent/ModalComponent.module.css";

export function ModalComponent({isVisible, onClick}) {
  return (
    <>
      <div className={`${styles.modal_block} ${isVisible ? styles.show : ""}`}>
      <div onClick={onClick} className={styles.icon_close}>X</div>
        ModalComponent
        </div>
    </>
  )
}
