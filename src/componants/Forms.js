import React from "react";
import { PersnolInfo, GradeForm, TeacherForm, QuestionForm } from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Forms() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/teacher form" element={ <TeacherForm/> }/>
          <Route path="/students form" element={ <PersnolInfo/> } />
          <Route path="/grade form" element={ <GradeForm/> } />
          <Route path="/question form" element={ <QuestionForm/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
