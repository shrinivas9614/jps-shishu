import { useState, useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../forms/APIS";

const AssesmentQuestionList = ({ _setOpenCallback }) => {
  const [Questions, setQuestions] = useState([]);
  const get = () => {
    api
      .get("/question-api")
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  useEffect(() => {
    get();
    
  }, []);

  return (
    <Card>
      <Card.Header
        style={{ backgroundColor: "transparent" }}
        className="border-0"
      >
        <Row>
          <Col>
            <Link
              className="float-end fs-5"
              onClick={() => _setOpenCallback("add")}
            >
              Add
            </Link>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Chapter</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>
            {Questions.length > 0 &&
              Questions.map((tea, index) => (
                <tr key={tea.id}>
                  <td>{index + 1}</td>
                  <td>
                    {new Date(tea.createddate)
                      .toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .split("/")
                      .join("/")}
                  </td>
                  <td>{tea.grade_id}</td>

                  <td>{tea.chapter_id?.name}</td>
                  <td>{tea.chapter_id?.subject_id?.name}</td>
                  <td>{tea.multiple_choice_question?.question}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AssesmentQuestionList;
