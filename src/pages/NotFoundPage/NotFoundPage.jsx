import React from "react";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  
  const naviagte = useNavigate();
  const backToMainPage = () => {
    naviagte("/main");
  };

  return (
    <>
      <button onClick={backToMainPage}>На главную страницу</button>
      <span>Запрашиваемая страница не найдена</span>
    </>
  );
}
