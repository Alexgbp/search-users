import React from "react";
import {Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import {  NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

export  function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
