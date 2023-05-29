import React, { useState, useEffect } from 'react'
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
import { Formik } from "formik";
import api from '../forms/APIS'
import { Link } from 'react-router-dom';
import moment from "moment";

export const ViewStudentInfo = ({ Id, _setOpenCallback }) => {
    console.log("view", Id)
    const [view, setView] = useState();

    const ViewStudentInfo = () => {
        api
            .get("/student-detail/" + Id + "/")
            .then((response) => {
                setView(response.data); // update the state with the fetched data
            })
            .catch((error) => {
                console.error(error); // handle any errors
            });
    }
    useEffect(() => {
        ViewStudentInfo();
    }, [])

    console.log("view", view)

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
                    <Row className="mb-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Aadhar number</Form.Label>
                                <Form.Control
                                    value={view?.aadhar_number}
                                     />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control                                    
                                    value={view?.firstname}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control                                    
                                    value={view?.middlename}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    value={view?.lastname}
                                />

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control
                                    value={view?.email}                                    
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label> phone number </Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                                    <Form.Control                                     
                                        value={view?.phone}
                                    />

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
                                    value={view?.address_line_1}

                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Country</Form.Label>
                                <Form.Control                                
                                    value={view?.country}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>State</Form.Label>
                                <Form.Control                                    
                                    value={view?.state}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    value={view?.city}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control
                                    value={view?.pincode}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={moment(view?.date_of_birth).format("L")}

                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={view?.gender}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Admission Date</Form.Label>
                                <Form.Control
                                    value={moment(view?.date_of_admission).format("L")}

                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label> Age </Form.Label>
                                <Form.Control
                                    value={view?.age}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label> Height </Form.Label>
                                <Form.Control
                                    value={view?.height}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label> Weight </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={view?.weight}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Control type="text"
                                    value={view?.blood_group}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* <Row className="mb-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label> Graid ID </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={view?.grade_id}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="text"
                                    value={view?.user_id}
                                />
                            </Form.Group>
                        </Col>
                    </Row> */}
                    <Row className="mb-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label> Category </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={view?.cast_category}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Religion</Form.Label>
                                <Form.Control type="text"
                                    value={view?.religion}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md={10}>
                            <div className="d-flex gap-2 justify-content-center mt-3 ">
                                <Button
                                    size="lg"
                                    onClick={() => _setOpenCallback("list")}
                                >

                                    Close
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
