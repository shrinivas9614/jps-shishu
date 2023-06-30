/** @format */

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionForm from "../forms/QuestionForm";
import MatchQuestionList from "./MatchQuestionList";
import MatchThePairsQuestionForm from "../forms/MatchThePairsQueForm";

export const MatchThePairs = () => {
  const [show, setShow] = useState(false);
  const [match, setMatch] = useState(true);
  return (
    <div>
      {show == false && 
        <Link onClick={() => setShow(true)}>Add Match The Pair Question</Link>
      }

      {show == true && (
        <Link className="pull-right mb-2" onClick={() => setShow(false)}>
          <i className="fa fa-times"></i>
        </Link>
      )}

      <Card className="border-0">
        <Card.Body></Card.Body>
        {show ? ( <MatchThePairsQuestionForm match={match} /> ) : ( <MatchQuestionList /> )}
      </Card>
    </div>
  );
};
