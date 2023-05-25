import React from 'react'
import { Card } from 'react-bootstrap'
import Adminsidebar from './adminSidebard'

export const AdminDashboard = () => {
  return (
    <>
          <Adminsidebar />
          <div className="content-wrapper-client-lead" >
              <Card>
                  <Card.Body style={{ minHeight: " 1043px" }}>
                      <h4>hii Admin,</h4>
                  </Card.Body>
              </Card>
          </div>

    </>
  
   
  )
}
