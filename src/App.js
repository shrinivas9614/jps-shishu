import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./componants/Admin/AdminLogin";
import GradeForm from "./componants/forms/GradeForm";
import TeacherForm from "./componants/forms/TeacherForm";
import PersonalInfo from "./componants/forms/PersnolInfo";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AdminLogin />}></Route>
                    <Route path="/teacher" element={<TeacherForm/>}></Route>
                    <Route path="/grade" element={<GradeForm/>}></Route>
                    <Route path="/personal" element={<PersonalInfo/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
