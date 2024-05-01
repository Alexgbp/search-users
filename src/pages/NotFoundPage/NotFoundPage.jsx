import React from "react";
import { useNavigate } from "react-router-dom";
import {ButtonComponent} from "../../components/buttonComponent/ButtonComponent"
import styles from "./NotFoundPage.module.css"

export function NotFoundPage() {
  
  const naviagte = useNavigate();
  const backToMainPage = () => {
    naviagte("/");
  };

  return (
    <div className={styles.notFound_block}>
    <ButtonComponent onClick={backToMainPage}>На главную страницу</ButtonComponent>
      <span className={styles.notFound_block__message}>Запрашиваемая страница не найдена</span>
    </div>
  );
}
