import React, { useCallback, useState } from 'react'
import { Card, Nav, Tab } from 'react-bootstrap'
import Assesment from '../componants/Admin/Assesment'
import Adminsidebar from '../componants/Admin/adminSidebard'
import { QuestionConatiner } from './questionContainer'


export const AssessmentContainer = () => {
    const [show, setShow] = useState("assement")
    const _setOpenCallback = useCallback(
        (show) => {
            setShow(show)
        },
    )
    const shows = () => {
        switch (show) {
            case "assement": return(<Assesment/>)
            case "question":return (<QuestionConatiner/>)
        }
    }
  return (
    <>
    <Adminsidebar/>
      <div className="content-wrapper-client-lead" style={{ minHeight: " 1043px" }}>
        
          <Card>
            <Card.Header>
                <Nav>
                    <Nav.Item>
                        <Nav.Link
                        onClick={() => { _setOpenCallback("assement")}}
                        >Assesment</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link                        
                        onClick={() => { _setOpenCallback("question") }}
                        >Question</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {shows()}
            </Card.Body>
          </Card>
    </div>
      </>
  )
}
