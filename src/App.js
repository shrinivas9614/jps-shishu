/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./componants/Admin/AdminLogin";
// import GradeForm from "./componants/forms/GradeForm";
import "./App.css";
import { Teacher } from "./componants/Admin/teacher";
import { Student } from "./componants/Admin/student";
import { AdminDashboard } from "./componants/Admin/admindashbaord";
import Grade from "./componants/Admin/Grade";
import Allocation from "./componants/Admin/Allocation";
import Report from "./componants/Admin/Report";

import Assesment from "./componants/Admin/Assesment";
import { AssessmentContainer } from "./container/assessmentContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />}></Route>
          <Route path="/teacher" element={<Teacher />}></Route>
          <Route path="/grade" element={<Grade />}></Route>
          <Route path="/allocate-user" element={<Allocation />}></Route>
          <Route path="/student" element={<Student />}></Route>
          <Route path="/assesment" element={<Assesment />}></Route>
          <Route path="/student" element={<Student />}></Route>

          <Route path="/assesment" element={<AssessmentContainer />}></Route>
          <Route path="/report" element={<Report />}></Route>

          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
