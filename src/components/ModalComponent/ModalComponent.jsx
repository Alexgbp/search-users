import React from "react";
import styles from "../ModalComponent/ModalComponent.module.css";
import { Link } from "react-router-dom";

export function ModalComponent({ login, isVisible, onClick }) {
  return (
    <>
      <div className={`${styles.modal_block} ${isVisible ? styles.show : ""}`}>
        <div onClick={onClick} className={styles.icon_close}>
          X
        </div>
        <Link
          className={styles.modal_block_link}
          to={`https://github.com/${login}`}
        >
          <span className={styles.modal_block_text}>Ссылка на репозиторий</span>
        </Link>
      </div>
    </>
  );
}
