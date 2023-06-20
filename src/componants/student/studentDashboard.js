import React from 'react'
import { Helmet } from "react-helmet";
import { Card } from 'react-bootstrap'
import { StudentSidebar } from './studentSidebar'
import { useLocation } from 'react-router-dom';

const StudentDashboard = () => {
  const location = useLocation();
  const receivedData = location.state?.data;
  console.log("StudentReceivedData: ", receivedData.Id)

  return (
    <>
      <Helmet>
        <title>Student Dashboard | JPS</title>
      </Helmet>

      <StudentSidebar id={receivedData.Id} />
      <div className="content-wrapper-client-lead" >
        <Card>
          <Card.Body style={{ minHeight: " 1043px" }}>
            <h4 className="text-left">Hii Student,</h4>
          </Card.Body>

        </Card>
      </div>
    </>
  );
};

export { StudentDashboard };