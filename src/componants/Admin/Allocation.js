/** @format */

import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import Adminsidebar from "./adminSidebard";
import { Card } from "react-bootstrap";
import StudentComp from "./StudentComp";
import TeacherComp from "./TeacherComp";

const Allocation = () => {
  const [showTeacher, setShowTeacher] = useState("");
  const [showStudent, setShowStudent] = useState("");
  const [teacherList, setTeacherList] = useState(true);
  const [studentList, setStudentList] = useState(false);

  useEffect =
    (() => {
      handleTabView("teacher_list");
    },
    []);

  const handleTabView = (id) => {
    if (id == "student_list") {
      setStudentList(true);
      setTeacherList(false);
      setShowTeacher(false);
      setShowStudent(true);
    } else {
      setStudentList(false);
      setTeacherList(true);
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
            {/* {shows()} */}
            <div className="card-body">
              <div className="row paddingL23" id="classDiv">
                <div className="col-lg-12 pad-t-20 form-group">
                  <button
                    onClick={(e) => handleTabView(e.target.id)}
                    id="teacher_list"
                    className={"btn btns mr-3 " + showTeacher}
                  >
                    Teacher
                  </button>
                  <button
                    onClick={(e) => handleTabView(e.target.id)}
                    id="student_list"
                    className={"btn btns mr-3 " + showStudent}
                  >
                    Student
                  </button>
                </div>
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
