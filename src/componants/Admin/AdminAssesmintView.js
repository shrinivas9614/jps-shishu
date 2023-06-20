import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../forms/APIS";
// import Swal from 'sweetalert2';

const AdminAssesmentView = ({ _setOpenCallback }) => {
  const [assessment, setAssessment] = useState([]);

  const get = () => {
    api
      .get("/assessment-api")
      .then((response) => {
        console.log("assessment_list_data", response.data);
        setAssessment(response.data);
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
              <th>Sr.No</th>
              <th>Date of asssement</th>
              <th>Assesment name</th>
              <th>Grade</th>
              <th>Subject of assesment</th>
              <th>Question type</th>
              <th>Teacher name</th>
              <th>Total marks</th>
            </tr>
          </thead>
          <tbody>
            {assessment.length > 0 &&
              assessment.map((asse, index) => (
                <tr key={asse.id}>
                  <td>{index + 1}</td>
                  <td>{new Date(asse.date_time).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').join('/')}</td>
                  <td>{asse.name}</td>
                  <td>{asse.grade_id}</td>
                  <td>{asse.subject}</td>
                  <td>{asse.question_type}</td>
                  <td>{asse.teacher_name}</td>
                  <td>{asse.marks}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AdminAssesmentView;
