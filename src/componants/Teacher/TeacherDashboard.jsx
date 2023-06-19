/** @format */
import React from "react";
import { Helmet } from "react-helmet";
import { TeacherSidebar } from "./TeacherSidebar";
import { Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

const TeacherDashboard = () => {
  const location = useLocation();
  const receivedData = location.state?.data;
  console.log("receivedData: ", receivedData.Id)
  return (
    <>
      <Helmet>
        <title>Teacher Dashboard | JPS</title>
      </Helmet>

      <TeacherSidebar id={receivedData.Id}/>
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
