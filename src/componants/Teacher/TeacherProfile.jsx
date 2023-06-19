import React, { useState, useCallback, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Button, Card, Form } from 'react-bootstrap'
import { TeacherSidebar } from './TeacherSidebar';
import { ViewTeacherProfile } from './ViewTeacherProfile';
import {
    Col,
    FormControl,
    FormGroup,
    FormLabel,
    InputGroup,
    Row,
} from "react-bootstrap";

import { useParams } from 'react-router-dom';
import EditTeacherProfile_new from './EditTeacherProfile';

export const TeacherProfile = () => {
    const [edit, setEdit] = useState(false)
    const [show, setShow] = useState("list")
    const [Id, setId] = useState();
    const { id } = useParams();
    console.log("Teacher Id: ", id)
    const _setOpenCallback = useCallback(
        (show) => {
            setShow(show)
        },
    )

    useEffect(() => {
        setId(id)

    }, []);

    return (
        <>
            <Helmet>
                <title>Teacher Profile | JPS</title>
            </Helmet>

            <TeacherSidebar />
            <div className="content-wrapper-client-lead" >

                <Card>
                    <Card.Body>

                        {edit == false &&
                            <div className='text-end m-3'>
                                <div >
                                    <Form.Group>
                                        <h4 className='text-center'>Profile Details</h4>
                                    </Form.Group>
                                </div>

                                <Button
                                    onClick={() => setEdit(true)}
                                >
                                    <i className='fa fa-edit' />
                                </Button>
                            </div>
                        }
                        {edit == true &&
                            <div className='text-end m-3'>
                                <div >
                                    <Form.Group>
                                        <h4 className='text-center'>Edit Profile Details</h4>
                                    </Form.Group>
                                </div>

                                <Button
                                    onClick={() => setEdit(false)}
                                >
                                    <i className='fa fa-times' />
                                </Button>
                            </div>
                        }

                        {
                            edit ?
                                <EditTeacherProfile_new id={id} setEdit={setEdit} {...{ _setOpenCallback, Id }} />
                                : <ViewTeacherProfile id={id} {...{ _setOpenCallback, Id }} />
                        }

                    </Card.Body>
                </Card>
            </div>
        </>
    )
}