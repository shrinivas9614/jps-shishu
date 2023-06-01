import React, { useState, useEffect } from "react";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../forms/APIS";
import Swal from 'sweetalert2';

export const GradeList = ({ _setOpenCallback, setId }) => {
  const [grade, setGrade] = useState([]);
  const get = () => {
    api
      .get("/grade-api ")
      .then((response) => {
        console.log(response.data); // process the response data
        setGrade(response.data); // update the state with the fetched data
      })
      .catch((error) => {
        console.error(error); // handle any errors
      });
  };
  const deleteGrade = (grade_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
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
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>grade code</th>
              <th>name</th>
              <th>created date</th>
            </tr>
          </thead>
          <tbody>
            {grade.length > 0 &&
              grade.map((tea, index) => (
                <>
                  <tr>
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
                </>
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default GradeList;
