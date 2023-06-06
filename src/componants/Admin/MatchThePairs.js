/** @format */

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionForm from "../forms/QuestionForm";
import MatchQuestionList from "./MatchQuestionList";

export const MatchThePairs = () => {
  const [show, setShow] = useState(false);
  const [match, setMatch] = useState(true);
  return (
    <div>
      {show == false && <Link onClick={() => setShow(true)}>Add Question</Link>}

      {show == true && (
        <Link onClick={() => setShow(false)}>
          <i className="fa fa-times"></i>
        </Link>
      )}
      {show ? <QuestionForm match={match} /> : <MatchQuestionList />}
    </div>
  );
};
