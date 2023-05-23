import React, { useEffect, useState } from "react";

import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import { states } from "../utils/Utils";

function TeacherForm() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);
  return (
    <div>
      <h2 className="d-flex justify-content-center ">Teacher Form</h2>
      <Form >
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Employee ID</Form.Label>
              <Form.Control name="employeeId" placeholder="123456" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Teacher ID</Form.Label>
              <Form.Control name="TeacherId" placeholder="123456" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Aadhar number</Form.Label>
              <Form.Control name="Aadhar number" placeholder="1234 1234 1234" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={4}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" placeholder="First Name " />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control name="middleName" placeholder="Middle Name" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <FormLabel>PAN Number</FormLabel>
              <FormControl
                name="PAN NUMBER"
                placeholder="ABCD1234E"
              ></FormControl>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Father Name</FormLabel>
              <FormControl
                name="Father Name"
                placeholder="Father Name"
              ></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email ID</Form.Label>
              <Form.Control name="emailId" placeholder="name@example.com" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label> phone number </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                <Form.Control placeholder="9421458711" />
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
                name="address"
                placeholder="Address"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control name="country" placeholder="Country" />
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
                onChange={(e) => setSelectedState(e.target.value)}
                placeholder="Select state"
              >
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
              <Form.Control name="pinCode" placeholder="413001" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="date Of Birth" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control type="date" name="Joining Date" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group>
              <Form.Label> Designation </Form.Label>
              <Form.Control placeholder="Designation" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label> Marital Status </Form.Label>
              <Form.Control placeholder="Marital Status" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Height</Form.Label>
              <Form.Control type="text" name="height" placeholder="6ft4in" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label> Waight </Form.Label>
              <Form.Control
                type="text"
                name="waight"
                placeholder="waight ex=50 kg"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
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
        </Row>

        <Row className="mb-2">
          <Col md={10}>
            <div className="d-flex gap-2 justify-content-center mt-3 ">
              <Button variant="primary" size="lg">
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
    </div>
  );
}

export default TeacherForm;
