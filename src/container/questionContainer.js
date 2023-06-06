/** @format */

import React, { useState, useCallback } from "react";
import { Card, Nav } from "react-bootstrap";
import { MCQQuestionType } from "../componants/Admin/mcqquestion";
import { MatchThePairs } from "../componants/Admin/MatchThePairs";

export const QuestionConatiner = () => {
  const [show, setShow] = useState("mcq");
  const _setOpenCallback = useCallback((show) => {
    setShow(show);
  });
  const shows = () => {
    switch (show) {
      case "mcq":
        return <MCQQuestionType />;
      case "pair":
        return <MatchThePairs />;
    }
  };
  return (
    <>
      <Card>
        <Card.Header>
          <Nav>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  _setOpenCallback("mcq");
                }}
              >
                Objective
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  _setOpenCallback("pair");
                }}
              >
                Match the pairs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>{shows()}</Card.Body>
      </Card>
    </>
  );
};
