import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import api from "./APIS"
import { useFormik } from "formik";

// import Adminsidebar from "../Admin/adminSidebard";
export default function GradeForm({ _setOpenCallback }) {
  const [grade, setGrade] = useState([]);


  const fetchGrades = () => {
    api
      .get("/grade-list")
      .then((response) => {
        console.log(response.data);
        setGrade(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (values) => {
   
    // Handle the submission logic here (e.g., update state, make API calls)
    api.post("/grade-list", JSON.stringify(values))
      .then((response) => {
        console.log("response", response)
        alert("Added successfully");
        // _setOpenCallback("list");
      })
      .catch((error) => {
        console.log("Error", error)
        alert("something wrong", error.message)
      })
  };


  const formik = useFormik({
    initialValues: {

      grade_id:6,
      grade_code:"",
      created_date:"",
      updated_date:"",
      created_by:"",
      uodated_by:"",
      name:""
    },
    onSubmit: handleSubmit

  })

  return (
    <div>
      <div>
        <section className="container-fluid-leads-grid">
          <Card>

          <Card.Header style={{ backgroundColor: "transparent" }} className="border-0 ">
        <Row>
                <Col>
                  <Link className="float-end fs-2 text-danger" onClick={() => { _setOpenCallback("list") }}>
                    <i className="fa fa-times" />
                  </Link>
                </Col>
              </Row>

        </Card.Header>
        <Card.Body>
        <Form>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>Grade ID</FormLabel>
                  <FormControl placeholder="grade ID" name="grade id" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>Grade Code</FormLabel>
                  <FormControl placeholder="grade code" name="grade code" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>created Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Updated Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>created by</FormLabel>
                  <FormControl placeholder="created by"></FormControl>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>Updated by</FormLabel>
                  <FormControl placeholder="Updated by"></FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormControl placeholder="Name" />
                </FormGroup>
              </Col>
            </Row>

            <div className="d-flex justify-content-center mt-3 ">
              <Button md={2} type="submit">
                {" "}
                insert grade{" "}
              </Button>
            </div>
          </Form>

        </Card.Body>
          </Card>
                    </section>
          </div>
      
    </div>
  );
}
