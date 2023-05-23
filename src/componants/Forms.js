import React from "react";
import { PersnolInfo, GradeForm, TeacherForm, QuestionForm } from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Forms() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/teacher" element={ <TeacherForm/> }/>
          <Route path="/students" element={ <PersnolInfo/> } />
          <Route path="/grade" element={ <GradeForm/> } />
          <Route path="/question" element={ <QuestionForm/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
