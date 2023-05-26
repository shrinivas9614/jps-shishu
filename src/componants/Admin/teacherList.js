import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../forms/APIS'

export const TeacherList = ({ _setOpenCallback }) => {
    const [teacher, setTeacher] = useState([])
    const getTeacherList = () => {
        api
            .get("/teacher-registration")
            .then((response) => {
                console.log(response.data); // process the response data
                setTeacher(response.data); // update the state with the fetched data
            })
            .catch((error) => {
                console.error(error); // handle any errors
            });
    };
    useEffect(() => {
        getTeacherList();
    }, [])

    return (
        <>
            <Card>
                <Card.Header
                    style={{ backgroundColor: 'transparent' }}
                    className='border-0'>
                    <Row>
                        <Col>
                            <Link className='float-end fs-5'
                                onClick={() => _setOpenCallback("add")}
                            >Add</Link>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover
                    className="text-center">
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Phone Nsumber</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                              <td>1</td>
                              <td>P</td>
                              <td>B</td>
                              <td>abc@gmail.com</td>
                              <td>7867564534</td>
                              <td>Male</td>
                              <td>
                                  <Button>
                                      <i className='fa fa-edit' />
                                  </Button>
                              </td>
                          </tr> */}

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>


        </>
    )
}