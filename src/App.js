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
import { Subject } from "./componants/Admin/subject";
import { Chapter } from "./componants/Admin/chapter";

import { TeacherLogin } from "../src/componants/Teacher/TeacherLogin";
import { TeacherDashboard } from "../src/componants/Teacher/TeacherDashboard";
import { TeacherProfile } from "../src/componants/Teacher/TeacherProfile";
import StudentLogin from "./componants/student/studentLogin";
import { StudentDashboard } from "./componants/student/studentDashboard";
import { StudentProfile } from "./componants/student/studentProfile";
import { StudentAssessment } from "./componants/student/StudentAssessment";
import { StudentContainer } from "./container/StudentAssessmentContainer";
import TestForm from "./componants/forms/test_1";
import { TeacherAssessment } from "./componants/Teacher/assement";
import StudentReport from "./componants/student/StudentReport";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* ================  Admin Dashboard  ================= */}
          <Route path="/" element={<AdminLogin />}></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="/teacher" element={<Teacher />}></Route>
          <Route path="/allocate-user" element={<Allocation />}></Route>
          {/* <Route path="/student" element={<Student />}></Route> */}
          <Route path="/student" element={<Student />}></Route>
          <Route path="/grade" element={<Grade />}></Route>
          <Route path="/subject" element={<Subject />}></Route>
          <Route path="/chapter" element={<Chapter />}></Route>
          <Route path="/assessment" element={<AssessmentContainer />}></Route>
          <Route path="/report" element={<Report />}></Route>

          {/* ================  Teacher Dashboard  ================= */}
          <Route path="/teacher-login" element={<TeacherLogin />}></Route>
          <Route
            path="/teacher-dashboard"
            element={<TeacherDashboard />}
          ></Route>
          <Route
            path="/teacher-profile/:id"
            element={<TeacherProfile />}
          ></Route>
          <Route
            path="/teacher-assessment/:id"
            element={<TeacherAssessment />}
          ></Route>

          {/* ================  Student Dashboard  ================= */}
          <Route path="/student-login" element={<StudentLogin />}></Route>
          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          ></Route>
          <Route
            path="/student-profile/:id"
            element={<StudentProfile />}
          ></Route>
          <Route
            path="/student-assessment"
            element={<StudentAssessment />}
          ></Route>
          <Route path="/assessment" element={<StudentContainer />}></Route>
          <Route path="/student-report" element={<StudentReport />}></Route>

          <Route path="/test-form" element={<TestForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
