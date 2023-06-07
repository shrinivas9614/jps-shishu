import React from 'react'
import { Helmet } from "react-helmet";
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

export const EditTeacherProfile = () => {

    return (
        <>
            <Helmet>
                <title>Edit Teacher Profile | JPS</title>
            </Helmet>

            <Card>
                <Card.Body>
                    <Form>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Aadhar number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Aadhar Number"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        placeholder="Enter First Name "
                                        type="text"
                                    />

                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Middle Name"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Last Name"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <FormGroup>
                                    <FormLabel>Pan Number</FormLabel>
                                    <FormControl
                                        placeholder="Enter Pan Number"
                                        type="text"
                                    ></FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <FormLabel>Father Name</FormLabel>
                                    <FormControl
                                        placeholder="Enter Father Name"
                                        type="text"
                                    ></FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email ID</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Email ID"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label> Phone Number </Form.Label>
                                    <Form.Control
                                        placeholder="Enter Phone Number"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Address"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Country"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        placeholder="Enter State"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        placeholder="Enter City"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Pincode"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Gender"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Date of Joining</Form.Label>
                                    <Form.Control
                                        type="date"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label> Designation </Form.Label>
                                    <Form.Control
                                        placeholder="Enter Designation"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label> Marital Status </Form.Label>
                                    <Form.Control
                                        placeholder="Marital Status"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Height</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Height"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label> Waight </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Waight"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className='text-center'>
                            <Button>
                                Update
                            </Button>
                        </div>
                    </Form>
                </Card.Body >
            </Card >
        </>
    );
}