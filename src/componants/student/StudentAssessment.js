import { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Card } from "react-bootstrap";
import { StudentContainer } from "../../container/StudentAssessmentContainer";
import { useLocation } from "react-router-dom";
import { StudentSidebar } from "./studentSidebar";
import Circle  from "./Questions/circle";
export function StudentAssessment() {
 
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Student Assesment | JPS</title>
      </Helmet>

      <StudentSidebar />
      <div className="content-wrapper-client-lead">
        <Card>
          <Card.Body style={{ minHeight: " 1043px" }}>
            <StudentContainer />
            <Circle />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

;
