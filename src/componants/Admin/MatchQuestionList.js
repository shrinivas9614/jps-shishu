/** @format */
import { Card, Col, Row, Table } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../forms/APIS";
const MatchQuestionList = () => {
  const [Questions, setQuestions] = useState([]);
  const get = () => {
    api
      .get("/match-pairs-api")
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Card>
      <Card.Header
        style={{ backgroundColor: "transparent" }}
        className="border-0"
      >
        {/* <Row>
          <Col>
            <Link
              className="float-end fs-5"
              onClick={() => _setOpenCallback("add")}
            >
              Add
            </Link>
          </Col>
        </Row> */}
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Topic</th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default MatchQuestionList;
