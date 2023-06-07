import React from 'react'
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

export const ViewTeacherProfile = () => {

    return (
        <>
            <Card>
                <Card.Body>
                    <Form>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Aadhar number</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Aadhar number"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="First Name "
                                        type="text" />

                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control placeholder="Middle Name"
                                        type="text" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Last Name"
                                        type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <FormGroup>
                                    <FormLabel>Pan Number</FormLabel>
                                    <FormControl
                                        placeholder="Pan Number"
                                        type="text"
                                    ></FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <FormLabel>Father Name</FormLabel>
                                    <FormControl
                                        placeholder="Father Name"
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
                                        placeholder="Email ID"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label> phone number </Form.Label>
                                    <Form.Control
                                        placeholder="phone number"
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
                                        placeholder="Address"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        placeholder="Country"
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
                                        placeholder="State"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        placeholder="City"
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
                                        placeholder="Pincode"
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
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
                                        placeholder="Designation"
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
                                        placeholder="6ft4in"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label> Waight </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="waight ex=50 kg"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body >
            </Card >
        </>
    );
}