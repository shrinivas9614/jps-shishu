import React from 'react'
import { Card, Row, Col,Form } from 'react-bootstrap'
export const ViewStudentProfile = () => {
    return (
        <>

            <Card >

                <Card.Body>
                    <Row className='mb-3'>
                        <Col lg={4}>
                            <Form.Label>First Name</Form.Label>
                            <p>p</p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Middle Name</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Last Name</Form.Label>
                            <p></p>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg={4}>
                            <Form.Label> Email Id</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Phone Number</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Address</Form.Label>
                            <p></p>
                        </Col>
                    </Row>
                    <Row className='mb-3'>

                        <Col lg={4}>
                            <Form.Label>Country</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>State</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>City</Form.Label>
                            <p></p>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg={4}>
                            <Form.Label>Pin Code</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Gender</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Blood Group</Form.Label>
                            <p></p>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg={4}>
                            <Form.Label>Date Of Birth</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Age</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Religion</Form.Label>
                            <p></p>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg={4}>
                            <Form.Label>Guardian's Name</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Guardian's Phone Number</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Aadhar number</Form.Label>
                            <p></p>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg={4}>
                            <Form.Label>Height</Form.Label>
                            <p></p>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>
                                Weight
                            </Form.Label>
                            <p></p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </>

    )
}
