import React, { useCallback, useState } from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import Assesment from "../componants/Admin/Assesment";
import Adminsidebar from "../componants/Admin/adminSidebard";
import { QuestionConatiner } from "./questionContainer";
import Circle from "../componants/student/Questions/circle";
import Ques from "../componants/student/Questions/ques";

export const StudentContainer = () => {
  const [show, setShow] = useState("assement");
  const _setOpenCallback = useCallback((show) => {
    setShow(show);
  });
  const shows = () => {
    // eslint-disable-next-line default-case
    switch (show) {
      case "assement":
        return <Circle />;
      case "question":
        return <Ques />;
    }
  };
  return (
    <>
      <div
        className="content-wrapper-client-lead"
        style={{ minHeight: " 1043px" }}
      >
        <Card>
          <Card.Header>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    _setOpenCallback("assement");
                  }}
                >
                  Assesment
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    _setOpenCallback("question");
                  }}
                >
                  Question
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>{shows()}</Card.Body>
        </Card>
      </div>
    </>
  );
};
