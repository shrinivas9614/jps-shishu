/** @format */

import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Adminsidebar from "./adminSidebard";
import api from "../forms/APIS";

export const AdminDashboard = () => {
  const [countStudent, setCountStudent] = useState();
  const [countTeacher, setCountTeacher] = useState();
  const [countGrade, setCountGrade] = useState();
  const getStudent = () => {
    api.get("/student-registration").then((response) => {
      setCountStudent(response.data.length);
    });
  };

  const getTeacher = () => {
    api.get("teacher-registration").then((response) => {
      setCountTeacher(response.data.length);
    });
  };

  const getGrade = () => {
    api.get("grade-api").then((response) => {
      setCountGrade(response.data.length);
    });
  };

  useEffect(() => {
    getStudent();
    getTeacher();
    getGrade();
  }, []);

  return (
    <>
      <Adminsidebar />
      <div className="content-wrapper-client-lead">
        <Card>
          <Card.Body style={{ minHeight: " 1043px" }}>
            <h2 className="text-center">Admin</h2>
            <div className="mt-4">
              <Row>
                <Col lg={3}>
                  <Card className="bg-primary">
                    <Card.Body>
                      <a href="/student" className="text-white fw-bold fs-4">
                        Student
                      </a>
                      <p className="fs-3 text-white">{countStudent}</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className="bg-secondary">
                    <Card.Body>
                      <a href="/teacher" className="text-white fw-bold fs-4">
                        Teacher
                      </a>
                      <p className="fs-3 text-white">{countTeacher}</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className="bg-success">
                    <Card.Body>
                      <a href="/grade" className="text-white fw-bold fs-4">
                        Grade
                      </a>
                      <p className="fs-3 text-white"> {countGrade} </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className="bg-info">
                    <Card.Body>
                      <a href="/assessment" className="text-white fw-bold fs-4">
                        Assements
                      </a>
                      <p className="fs-3 text-white">0</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
