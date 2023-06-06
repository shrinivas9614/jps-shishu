/** @format */

import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
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

const schema = Yup.object().shape({});

const TeacherAllocationForm = ({ _setOpenCallback }) => {
  useEffect = () => {};
  return (
    <div>
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
                      onClick={() => _setOpenCallback("list")}
                    >
                      <i className="fa fa-times" />
                    </Link>
                  </Col>
                </Row>
              </Card.Header>
              <br></br>
              <Card.Body>
                <Formik
                  initialValues={{
                    user: "",
                    grade: "",
                  }}
                  validationSchema={schema}
                  onSubmit={(
                    values,
                    { setStatus, setSubmitting, _setOpenCallback }
                  ) => {}}
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
                    status,
                  }) => (
                    <>
                      <Form>
                        <Row>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>User</Form.Label>
                              <Form.Select
                                name="user"
                                value={values.user}
                                onChange={handleChange}
                              >
                                <option value="DEFAULT">Select User</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Grade</Form.Label>
                              <Form.Select
                                name="grade"
                                value={values.grade}
                                onChange={handleChange}
                              >
                                <option value="DEFAULT">Select Grade</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className="d-flex justify-content-center mt-3 ">
                          <Button md={2} type="submit">
                            {" "}
                            submit{" "}
                          </Button>
                        </div>
                      </Form>
                    </>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </section>
        </div>
        ;
      </div>
    </div>
  );
};

export default TeacherAllocationForm;
