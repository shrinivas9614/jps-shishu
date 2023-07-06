/** @format */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Card, Col, Row } from "react-bootstrap";
import api from "../forms/APIS";
import { StudentSidebar } from './studentSidebar'
export const StudentDashboard  = () => {

  const [CountAssesment, setCountAssesment] = useState();

 
  const getAssesment = () => {
    api.get("assessment-api").then((response) => {
      setCountAssesment(response.data.length);
    });
  };

  useEffect(() => {
   
    getAssesment();
  }, []);

  return (
    <>
      <Helmet>
        <title>Student Dashboard | JPS</title>
      </Helmet>

      <StudentSidebar />
      <div className="content-wrapper-client-lead">
        <Card>
          <Card.Body style={{ minHeight: " 1043px" }}>
            <h2 className="m-3 text-center title_label table-header">Student Console</h2>
            <div className="mt-4">
              <Row>
                <Col lg={3}>
                  <Card className="bg-secondary">
                    <Card.Body>``
                      <a href="/student-assessment" className="text-white fw-bold fs-4">
                        Total Assesments
                      </a>
                      <p className="fs-3 text-white">{CountAssesment}</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className="bg-success">
                    <Card.Body>
                      <a href="/grade" className="text-white fw-bold fs-4">
                        Remaining Assesments
                      </a>
                      <p className="fs-3 text-white">0</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className="bg-info">
                    <Card.Body>
                      <a href="/assessment" className="text-white fw-bold fs-4">
                      Attended  Assements
                      </a>
                      <p className="fs-3 text-white"> 0 </p>
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

