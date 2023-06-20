/** @format */
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, FormGroup, InputGroup, Row, FormLabel, FormControl } from "react-bootstrap";
// import Adminsidebar from "../Admin/adminSidebard";
import { Link } from "react-router-dom";
import { states, bloodGroups } from "../utils/Utils";
import { Formik } from "formik";
import api from "./APIS";
import * as Yup from "yup";
import Swal from "sweetalert2";


function AssesmentForm({ _setOpenCallback }) {
  const [SelectedGrade, setSelectedGrade] = useState(null)
  const [GradeResponse, setGradeResponse] = useState("")

  // Select Grade
  const getGrades = () => {
    api
      .get("/grade-api")
      .then((res) => {
        console.log("Grade response", res, "grade_id:", res.data.grade_id);
        setGradeResponse(res.data)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getGrades();
  }, []);

  const handleDropdownGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  return (
    <div>
      <div style={{ minHeight: " 1043px" }}>
        <section className="container-fluid-leads-grid">
          <Card>
            <Card.Header
              style={{ backgroundColor: "transparent" }}
              className="border-0 "
            >
              <Row>
                <Col>
                  <Link
                    className="float-end fs-2 text-danger"
                    onClick={() => {
                      _setOpenCallback("list");
                    }}
                  >
                    <i className="fa fa-times" />
                  </Link>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Formik
                // enableReinitialize={true}
                initialValues={{
                  name: "",
                  date_time: "",
                  subject: "",
                  marks: "",
                  question_type: "",
                  teacher_name: "",
                  grade_id: "",
                }}
                // validationSchema={schema}
                onSubmit={(values, { setStatus, setSubmitting }) => {
                  values.grade_id = SelectedGrade
                  console.log("values:- ", values)
                  api
                    .post("/assessment-api", values)
                    .then((response) => {
                      console.log("response", response);
                      Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Assessment Created Successfully!",
                      }).then(() => { });
                      // _setOpenCallback("list");
                    })
                    .catch((error) => {
                      console.log("Error", error);
                      alert("Error");
                    })
                    .finally(() => {
                      setSubmitting(false);
                    });
                }}
              >

                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                  status
                }) => (
                  <>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col>
                          <FormGroup>
                            <FormLabel>Assessment Name</FormLabel>
                            <FormControl
                              name="name"
                              placeholder="Assessment Name"
                              value={values.name}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Date of Assessment</FormLabel>
                            <FormControl
                              type="date"
                              placeholder="Date of Assessment"
                              name="date_time"
                              value={values.date_time}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <FormLabel>Grade</FormLabel>
                            <Form.Select
                              name="grade_id"
                              onChange={(e) => setSelectedGrade(e.target.value)}
                              value={SelectedGrade}
                            // type="number"
                            >
                              <option>Select Grade</option>
                              {GradeResponse.length > 0 &&
                                GradeResponse.map((grd, index) => (
                                  <option key={grd.grade_id} value={grd.grade_id} > {grd.name}</option>
                                ))}
                            </Form.Select>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Subject of Assessment </FormLabel>
                            <FormControl
                              placeholder="Subject of Assessment"
                              name="subject"
                              type="text"
                              value={values.subject}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Total Marks</FormLabel>
                            <Form.Control
                              type="number"
                              // step={0.1}
                              id="marks"
                              name="marks"
                              placeholder="Total Marks"
                              value={values.marks}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <FormLabel>Types of Questions</FormLabel>
                            <Form.Select
                              placeholder="Types of Questions"
                              name="question_type"
                              value={values.question_type}
                              onChange={handleChange}
                            >
                              <option>Select Question Type</option>
                              <option>Match the Pairs</option>
                              <option>Objective</option>
                            </Form.Select>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Teacher Name</FormLabel>
                            <FormControl
                              placeholder="Teacher Name"
                              name="teacher_name"
                              value={values.teacher_name}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <div className='text-center mt-4'>
                        <Button type="submit" variant="primary" size="lg">
                          {" "}
                          Submit{" "}
                        </Button>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </section>
      </div >
    </div>
  );
};

export default AssesmentForm;
