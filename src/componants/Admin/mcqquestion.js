/** @format */

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionForm from "../forms/QuestionForm";
import AssesmentQuestionList from "./AsssementQuestionList";

export const MCQQuestionType = () => {
  const [show, setShow] = useState(false);
  const [mcq, setMcq] = useState(true);
  return (
    <div>
      {show == false && (
        <Link onClick={() => setShow(true)}>Add MCQ Question</Link>
      )}

      {show == true && (
        <Link className="pull-right mb-2" onClick={() => setShow(false)}>
          <i className="fa fa-times"></i>
        </Link>
      )}
      <Card className="border-0">
        <Card.Body>
          {show ? <QuestionForm mcq={mcq} /> : <AssesmentQuestionList />}
        </Card.Body>
      </Card>
    </div>
  );
};
