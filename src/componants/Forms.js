import React from "react";
import { PersnolInfo, GradeForm, TeacherForm } from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Forms() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/teacher" element={ <TeacherForm/> }/>
          <Route path="/students" element={ <PersnolInfo/> } />
          <Route path="/grade" element={ <GradeForm/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
