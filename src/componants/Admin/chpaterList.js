import React, { useState, useEffect } from "react";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../forms/APIS";
import Swal from 'sweetalert2';

export const ChapterList = ({ _setOpenCallback, setEdit }) => {
    const [chapter, setChapter] = useState([]);

    const getChapterList = () => {
        api
            .get("/chapter-api")
            .then((response) => {
                console.log("chapter list data", response.data);
                setChapter(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getChapterList();
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
                            <th>Subject</th>
                            <th>Topic</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chapter.length > 0 &&
                            chapter.map((sub_chptr, index) => (
                                <tr key={sub_chptr.chapter_id}>
                                    <td>{index + 1}</td>
                                    <td>{sub_chptr.chapter_id}</td>
                                    <td>{sub_chptr.name}</td>
                                    <td>
                                        <Button className='me-sm-1'
                                            onClick={() => {
                                                _setOpenCallback("edit")
                                                setEdit(sub_chptr.id)
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

export default ChapterList;
