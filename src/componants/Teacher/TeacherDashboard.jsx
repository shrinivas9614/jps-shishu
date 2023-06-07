/** @format */
import React from "react";
import { Helmet } from "react-helmet";
import { TeacherSidebar } from "./TeacherSidebar";
import { Card } from 'react-bootstrap'

const TeacherDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Teacher Dashboard | JPS</title>
      </Helmet>

      <TeacherSidebar />
      <div className="content-wrapper-client-lead" >
        <Card>
          <Card.Body style={{ minHeight: " 1043px" }}>
            <h4 className="text-left">Hello Teacher,</h4>
          </Card.Body>

        </Card>
      </div>
    </>
  );
};

export { TeacherDashboard };
