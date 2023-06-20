import React, { useState, useCallback, useEffect } from 'react'
import Adminsidebar from './adminSidebard';
import { SubjectList } from './subjectList';
import SubjectForm from '../forms/subjectForm';
import { Card } from 'react-bootstrap';
import { EditSubject } from '../forms/editSubject';
import { useParams } from 'react-router-dom';

export const Subject = () => {
    const [subjectId, setSubjectId] = useState();
    const { subject_id } = useParams();
    console.log("Student Id: ", subject_id)

    const [show, setShow] = useState("list");
    const [edit, setEdit] = useState(false);
    const _setOpenCallback = useCallback((show) => {
        setShow(show);
    });

    useEffect(() => {
        setSubjectId(subject_id)

    }, []);

    const shows = () => {
        switch (show) {
            case "add":
                return <SubjectForm {...{ _setOpenCallback }} />;
            case "list":
                return <SubjectList {...{ _setOpenCallback, setEdit }} />;
            case "edit":
                return <EditSubject subject_id={subject_id} setEdit={setEdit} {...{ _setOpenCallback, subjectId }} />
        }
    };
    return (
        <>
            <Adminsidebar />
            <div
                className="content-wrapper-client-lead"
                style={{ minHeight: " 1043px" }}
            >
                <Card style={{ minHeight: "1043px" }}>
                    <Card.Body>
                        <h5 className="text-center">Subject</h5>
                        {shows()}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
