import React, { useState } from "react";
import PersnolInfo from "./forms/PersnolInfo";
import TeacherForm from "./forms/TeacherForm";
import GradeForm from "./forms/GradeForm";
import { Nav } from "react-bootstrap";
import AdminLogin from "./Admin/AdminLogin";
export default function Forms() {
  const [activeForm, setActiveForm] = useState("grade"); // Initial active form

  const handleFormChange = (form) => {
    setActiveForm(form);
  };

  return (
    <div>
      <div className="sidebar">
        <Nav className="flex-column">
          <Nav.Link onClick={() => handleFormChange("grade")} className={activeForm === "grade" ? "active" : ""}>
            Grade Form
          </Nav.Link>
          <Nav.Link onClick={() => handleFormChange("personal")} className={activeForm === "personal" ? "active" : ""}>
            Personal Info
          </Nav.Link>
          <Nav.Link onClick={() => handleFormChange("teacher")} className={activeForm === "teacher" ? "active" : ""}>
            Teacher Form
          </Nav.Link>
          <Nav.Link onClick={() => handleFormChange("admin")} className={activeForm === "admin" ? "active" : ""}>
            Admin Form
          </Nav.Link>
        </Nav>
      </div>

      <div className="form-content">
        {activeForm === "grade" && <GradeForm />}
        {activeForm === "personal" && <PersnolInfo />}
        {activeForm === "teacher" && <TeacherForm />}
        {activeForm === "admin" && <AdminLogin />}
      </div>
    </div>
  );
}