import React from 'react'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'

export const EditStudentPorfile = () => {
    return (
        <>
            <Card >

                <Card.Body>
                    <Form>
                        <Row className='mb-3'>
                            <Col lg={4}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={4}>
                                <Form.Label> Email Id</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className='mb-3'>

                            <Col lg={4}>
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={4}>
                                <Form.Label>Pin Code</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Select
                                >
                                    <option>Select blood Group</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={4}>
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control
                                    type="date"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Religion</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={4}>
                                <Form.Label>Guardian's Name</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Guardian's Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>Aadhar number</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col lg={4}>
                                <Form.Label>Height</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Label>
                                    Weight
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <div className='text-center'>
                            <Button>
                                Update
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
