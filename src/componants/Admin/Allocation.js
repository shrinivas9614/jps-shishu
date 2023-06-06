/** @format */

import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import Adminsidebar from "./adminSidebard";
import { Card } from "react-bootstrap";
import StudentComp from "./StudentComp";
import TeacherComp from "./TeacherComp";

const Allocation = () => {
  const [showTeacher, setShowTeacher] = useState(true);
  const [showStudent, setShowStudent] = useState(false);

  useEffect =
    (() => {
      handleTabView("teacher_list");
    },
    []);

  const handleTabView = (id) => {
    if (id == "student_list") {
      setShowTeacher(false);
      setShowStudent(true);
    } else {
      setShowTeacher(true);
      setShowStudent(false);
    }
  };

  return (
    <div>
      <Adminsidebar />
      <div
        className="content-wrapper-client-lead"
        style={{ minHeight: " 1043px" }}
      >
        <Card style={{ minHeight: "1043px" }}>
          <Card.Body>
            <h4 className="text-center">Allocation</h4>
            <div className="row paddingL23 text-center" id="classDiv">
              <div className="col-lg-12 pad-t-20 form-group">
                <button
                  onClick={(e) => handleTabView(e.target.id)}
                  id="teacher_list"
                  className={"btn btn-primary btns mr-3 me-4 "}
                >
                  Teacher
                </button>
                <button
                  onClick={(e) => handleTabView(e.target.id)}
                  id="student_list"
                  className={"btn btn-primary btns mr-3 me-4 "}
                >
                  Student
                </button>
              </div>
              <div className="card-content">
                {showTeacher ? <TeacherComp /> : ""}
                {showStudent ? <StudentComp /> : ""}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Allocation;
