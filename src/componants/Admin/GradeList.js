import React, { useState, useEffect } from "react";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../forms/APIS";
import Swal from 'sweetalert2';

export const GradeList = ({ _setOpenCallback, setId }) => {
  const [grade, setGrade] = useState([]);

  const get = () => {
    api
      .get("/grade-api")
      .then((response) => {
        console.log(response.data);
        setGrade(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteGrade = (grade_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .delete("/grade-detail/" + grade_id + "/")
          .then((response) => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Grade deleted successfully',
            }).then(() => {
              get();
            });
          })
          .catch((error) => {
            console.log(error);
            alert('Grade data not found');
          });
      }
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
        <div className="table-responsive">
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Grade Code</th>
                <th>Name</th>
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {grade.length > 0 &&
                grade.map((tea, index) => (
                  <tr key={tea.grade_id}>
                    <td>{index + 1}</td>
                    <td>{tea.grade_code}</td>
                    <td>{tea.name}</td>
                    <td>{tea.createddate}</td>
                    <td>
                      <Button
                        onClick={() => {
                          deleteGrade(tea.grade_id);
                        }}
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GradeList;
