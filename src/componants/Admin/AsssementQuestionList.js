import React, { useState, useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../forms/APIS";
// import AiOutlineCheck from "rea"
const AssesmentQuestionList = ({ setOpenCallback }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");

  const fetchQuestions = () => {
    api
      .get("/question-api", { params: { grade: selectedGrade } })
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, [selectedGrade]);

  return (
    <Card>
      <Card.Header className="border-0 bg-transparent">
        <Row>
          <Col>
            <Link className="float-end fs-5" onClick={() => setOpenCallback("add")}>
              Add
            </Link>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            {/* <h3>FILTER</h3> */}
          </Col>
          <Col md={4}>
            <select
              className="form-select"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="">All Grades</option>
              <option value="3">LKG</option>
              <option value="4">UKG</option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              {/* Add more grade options as needed */}
            </select>
          </Col>
        </Row>
        <Table striped bordered hover className="text-center mt-3">
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
            {questions.length > 0 &&
              questions
                .filter((question) => selectedGrade === "" || Number(question.grade_id) === Number(selectedGrade))
                .map((question, index) => (
                  <tr key={question.id}>
                  <td>{index + 1}</td>
                  <td>
                    {new Date(question.createddate)
                      .toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .split("/")
                      .join("/")}
                  </td>
                 
                  <td> {question.chapter_id?.subject_id?.grade_id?.name} </td>
                  <td>{question.chapter_id?.subject_id?.name}</td>
                  <td>{question.chapter_id?.name}</td>
                  <td>{question.multiple_choice_question?.question}</td>
                  
                </tr>
                ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AssesmentQuestionList;