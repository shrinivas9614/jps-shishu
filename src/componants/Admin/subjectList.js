import React, { useState, useEffect } from "react";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../forms/APIS";
import Swal from 'sweetalert2';

export const SubjectList = ({ _setOpenCallback, setEdit }) => {
    const [subject, setSubject] = useState([]);

    const get = () => {
        api
            .get("/subject-api")
            .then((response) => {
                console.log("suject list data", response.data);
                setSubject(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        get();
    }, []);

    return (
        <Card>
            <Card.Body>
                <div className='text-end m-3'>
                    <Button
                        onClick={() => _setOpenCallback("add")}
                    >
                        Add
                    </Button>
                </div>
                <Table striped bordered className='text-center'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Grade</th>
                            <th>Subject</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subject.length > 0 &&
                            subject.map((sub, index) => (
                                <tr key={sub.subject_id}>
                                    <td>{index + 1}</td>
                                    <td>{sub.grade_id.name}</td>
                                    <td>{sub.name}</td>
                                    <td>
                                        <Button className='me-sm-1'
                                            onClick={() => {
                                                _setOpenCallback("edit")
                                                setEdit(sub.id)
                                            }}
                                        >
                                            <i className='fa fa-edit'></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default SubjectList;
