import React from "react";
import { sidebarIcons } from "./sidebardata";
import "./sideBar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersnolInfo, GradeForm, TeacherForm } from "./index";
export default function Sidebar() {
  function getComponentByPath(path) {
    switch (path) {
      case "/":
        return <GradeForm />;
      case "/students":
        return <PersnolInfo />;
      case "/teacher":
        return <TeacherForm />;
      default:
        return null;
    }
  }

  return (
    <div className="sidebar">
      <BrowserRouter>
        <Routes>
          {sidebarIcons.map((icon, index) => (
            <Route key={index} path={icon.path} element={getComponentByPath(icon.path)} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
