import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import { states } from "../utils/Utils";
import { Formik } from "formik";
import api from '../forms/APIS'
import { Link } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  aadhar_number: Yup.string()
    .matches(/^[2-9]{1}[0-9]{11}$/, 'Invalid Aadhaar number'),
});

function TeacherForm({ _setOpenCallback }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);
  return (
    <>
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
              aadhar_number: '',
              address_line_1: '',
              city: '',
              country: '',
              date_of_birth: new Date(),
              date_of_joining: new Date(),
              email: '',
              employee_id: '',
              designation: '',
              father_name: '',
              firstname: '',
              gender: '',
              height: '',
              lastname: '',
              marital_status: '',
              middlename: '',
              mobile: '',
              pan_number: '',
              phone: '',
              pincode: '',
              spause_name: '',
              state: '',
              weight: '',
            }}
            validationSchema={schema}
            onSubmit={(values, { setStatus, setSubmitting }) => {            
              values.state=selectedState?selectedState:''
              values.city=selectedCity?selectedCity:''
              api.post("/teacher-registration", values)
                .then((response) => {
                  console.log("response", response)
                  alert("Added successfully");
                  _setOpenCallback("list");
                  
                })
                .catch((error)=>{
                  console.log("Error",error)
                  alert("something wrong",error.message)
                })

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
                  <Row className="mb-2">
                    {/* <Col md={6}>
                    <Form.Group>
                      <Form.Label>Employee ID</Form.Label>
                      <Form.Control name="employeeId" placeholder="123456" />
                    </Form.Group>
                  </Col> */}
                  </Row>
                  <Row className="mb-2">
                    {/* <Col md={6}>
                    <Form.Group>
                      <Form.Label>Teacher ID</Form.Label>
                      <Form.Control name="TeacherId" placeholder="123456" />
                    </Form.Group>
                  </Col> */}
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Aadhar number</Form.Label>
                        <Form.Control
                          name="aadhar_number"
                          value={values.aadhar_number}
                          onChange={handleChange}
                          isInvalid={!!errors.aadhar_number}
                          placeholder="1234 1234 1234" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-2">
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
                        {/* <Form.Control.Feedback type="invalid">
                          {errors.firstname}
                        </Form.Control.Feedback> */}
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
                        {/* <Form.Control.Feedback type="invalid">
                          {!!errors.lastname}
                        </Form.Control.Feedback> */}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <FormGroup>
                        <FormLabel>PAN Number</FormLabel>
                        <FormControl
                          placeholder="ABCD1234E"
                          name="pan_number"
                          value={values.pan_number}
                          onChange={handleChange}
                        ></FormControl>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <FormLabel>Father Name</FormLabel>
                        <FormControl
                          placeholder="Father Name"
                          name="father_name"
                          value={values.father_name}
                          onChange={handleChange}
                        ></FormControl>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
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
                          <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                          <Form.Control placeholder="9421458711"
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
                  <Row className="mb-2">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Address"
                          name="address_line_1"
                          value={values.address_line_1}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          placeholder="Country"
                          name="country"
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
                            setSelectedState(e.target.value)
                          }
                          }
                          placeholder="Select state"
                        >
                          <option value selected hidden>select state</option>
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
                          <option value selected hidden>select city</option>
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
                  <Row className="mb-2">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                          placeholder="413001"
                          name="pincode"
                          value={values.pincode}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
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
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          name="date_of_birth"
                          value={values.date_of_birth}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Date of Joining</Form.Label>
                        <Form.Control type="date"
                          name="date_of_joining"
                          value={values.date_of_joining}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label> Designation </Form.Label>
                        <Form.Control
                          placeholder="Designation"
                          name="designation"
                          value={values.designation}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label> Marital Status </Form.Label>
                        <Form.Control
                          placeholder="Marital Status"
                          name="marital_status"
                          value={values.marital_status}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="text"
                          placeholder="6ft4in"
                          name="height"
                          value={values.height}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label> Waight </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="waight ex=50 kg"
                          name="weight"
                          value={values.weight}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row className="mb-2">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label> Batch ID </Form.Label>
                      <Form.Control placeholder="Batch Id" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label> User ID </Form.Label>
                      <Form.Control placeholder="user ID ex-123456" />
                    </Form.Group>
                  </Col>
                </Row> */}

                  <Row className="mb-2">
                    <Col md={10}>
                      <div className="d-flex gap-2 justify-content-center mt-3 ">
                        <Button
                          type="submit"
                          variant="primary" size="lg">
                          {" "}
                          Submit{" "}
                        </Button>
                        <Button variant="primary" size="lg">
                          {" "}
                          Reset{" "}
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
    </>
   
  );
}

export default TeacherForm;
