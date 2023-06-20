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
      {show == false && <Link onClick={() => setShow(true)}>Add MCQ Question</Link>}

      {show == true && (
        <Link onClick={() => setShow(false)}>
          <i className="fa fa-times"></i>
        </Link>
      )}
      {show ? <QuestionForm mcq={mcq} /> : <AssesmentQuestionList />}
    </div>
  );
};
