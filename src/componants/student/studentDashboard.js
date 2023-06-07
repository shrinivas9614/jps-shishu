import React from 'react'
import { Helmet } from "react-helmet";
import { Card } from 'react-bootstrap'
import { StudentSidebar } from './studentSidebar'

export const StudentDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Student Dashboard | JPS</title>
      </Helmet>

      <StudentSidebar />
      <div className="content-wrapper-client-lead" >
        <Card>
          <Card.Body style={{ minHeight: " 1043px" }}>
            <h4 className="text-left">Hii Student,</h4>
          </Card.Body>

        </Card>
      </div>
    </>
  )
}
