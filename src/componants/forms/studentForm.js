import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, FormGroup, InputGroup, Row } from "react-bootstrap";
import { states, bloodGroups } from "../utils/Utils";
import { Formik } from "formik";
import api from "./APIS";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Adminsidebar from "../Admin/adminSidebard";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  aadhar_number: Yup.string().matches(
    /^[2-9]{1}[0-9]{11}$/,
    "Invalid Aadhaar number"
  ),
});

function StudentForm({ _setOpenCallback }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);

  return (
    <div>
      <div >
        <section className="container-fluid-leads-grid">
          <Card>
            <Card.Header
              style={{ backgroundColor: 'transparent' }}
              className='border-0'>
              <Row>
                <Col>
                  <Link
                    className='float-end fs-5 text-danger'
                    onClick={() => { _setOpenCallback("list") }}>
                    <i className="fa fa-times" />
                  </Link>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Formik
                initialValues={{
                  student: "",
                  firstname: "",
                  middlename: "",
                  lastname: "",
                  age: "",
                  email: "",
                  avatar: "",
                  birthplace: "",
                  blood_group: "",
                  caste: "",
                  city: "",
                  country: "",
                  gender: "",
                  height: "",
                  weight: "",
                  aadhar_number: "",
                  address_line_1: "",
                  addmission_number: "",
                  date_of_admission: "",
                  date_of_birth: "",
                  app_token: "",
                  mode_of_transport: "",
                  mother_tongue: "",
                  nationality: "",
                  permenant_registration_number: "",
                  phone: "",
                  pincode: "",
                  religion: "",
                  school_house: "",
                  state: "",
                  grade_id: "",
                  user_id: "",
                  cast_category: "",
                  sub_cast: "",
                }}
                validationSchema={schema}
                onSubmit={(values, { setStatus, setSubmitting }) => {
                  values.state = selectedState ? selectedState : "";
                  values.city = selectedCity ? selectedCity : "";
                  api
                    .post("/student-registration", values)
                    .then((response) => {
                      console.log("response", response);
                      alert("Student Data Added Successfully!");
                      _setOpenCallback("list");
                    })
                    .catch((error) => {
                      console.log("Error", error);
                      alert(
                        "Mobile number or email already present please try another email or mobile number"
                      );
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
                      {/* Rest of the form fields */}
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Aadhar number</Form.Label>
                            <Form.Control
                              name="aadhar_number"
                              value={values.aadhar_number}
                              onChange={handleChange}
                              isInvalid={!!errors.aadhar_number}
                              placeholder="1234 1234 1234"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              placeholder="First Name "
                              name="firstname"
                              value={values.firstname}
                              onChange={handleChange}
                              isInvalid={!!errors.firstname}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control
                              placeholder="Middle Name"
                              name="middlename"
                              value={values.middlename}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              placeholder="Last Name"
                              name="lastname"
                              value={values.lastname}
                              onChange={handleChange}
                              isInvalid={!!errors.lastname}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="name@example.com"
                              isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label> phone number </Form.Label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                +91
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="9421458711"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                isInvalid={!!errors.phone}
                              />
                              <Form.Control.Feedback type="invalid">
                                {!!errors.phone}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              as="textarea"
                              name="address_line_1"
                              placeholder="Address"
                              value={values.address_line_1}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                              name="country"
                              placeholder="Country"
                              value={values.country}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row className="mb-2">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Select
                              className="mb-2"
                              value={selectedState}
                              onChange={(e) => {
                                setSelectedState(e.target.value);
                              }}
                              placeholder="Select state"
                            >
                              <option value selected hidden>
                                select state
                              </option>
                              {states.map((state, index) => (
                                <option key={index} value={index}>
                                  {state.name}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>City</Form.Label>

                            <Form.Select
                              className="mb-2"
                              value={selectedCity}
                              onChange={(e) => setSelectedCity(e.target.value)}
                              placeholder="City"
                            >
                              <option value selected hidden>
                                select city
                              </option>
                              {selectedState !== "" &&
                                states[selectedState].cities.map((city, index) => (
                                  <option key={index} value={index}>
                                    {city}
                                  </option>
                                ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control
                              name="pincode"
                              placeholder="413001"
                              value={values.pincode}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                              type="date"
                              name="date_of_birth"
                              value={values.date_of_birth}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                              name="gender"
                              value={values.gender}
                              onChange={handleChange}
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Admission Date</Form.Label>
                            <Form.Control
                              type="date"
                              name="date_of_admission"
                              value={values.date_of_admission}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                              type="number"
                              name="age"
                              placeholder="Age"
                              value={values.age}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                              type="text"
                              name="height"
                              placeholder="Enter Height"
                              value={values.height}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control
                              type="text"
                              name="weight"
                              placeholder="Enter Weight"
                              value={values.weight}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Form.Label>Blood Group</Form.Label>
                            <Form.Select
                              name="blood_group"
                              value={values.blood_group}
                              onChange={handleChange}
                            >
                              {bloodGroups.map((bgrup) => (
                                <option key={bgrup}>{bgrup}</option>
                              ))}
                            </Form.Select>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Graid ID</Form.Label>
                            <Form.Control
                              name="grade_id"
                              type="number"
                              placeholder="Enter Graid ID ex-123456"
                              value={values.grade_id}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>User ID</Form.Label>
                            <Form.Control
                              name="user_id"
                              type="number"
                              placeholder="user ID ex-123456"
                              value={values.user_id}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                              name="cast_category"
                              placeholder="cast_category"
                              value={values.cast_category}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Religion</Form.Label>
                            <Form.Control
                              name="religion"
                              placeholder="religion"
                              value={values.religion}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row className="mb-2">
                        <Col md={10}>
                          <div className="d-flex gap-2 justify-content-center mt-3 ">
                            <Button type="submit" variant="primary" size="lg">
                              {" "}Submit{" "}
                            </Button>
                            <Button variant="primary" size="lg">
                              {" "}Reset{" "}
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default StudentForm;