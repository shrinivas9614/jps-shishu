import React, { useCallback, useState } from 'react'
import Adminsidebar from './adminSidebard';
import { SubjectList } from './subjectList';
import SubjectForm from '../forms/subjectForm';
import { Card } from 'react-bootstrap';
import { EditSubject } from '../forms/editSubject';

export const Subject = () => {
    const [show, setShow] = useState("list");
    const [edit, setEdit] = useState();
    const _setOpenCallback = useCallback((show) => {
        setShow(show);
    });
    const shows = () => {
        switch (show) {
            case "add":
                return <SubjectForm {...{ _setOpenCallback }} />;
            case "list":
                return <SubjectList {...{ _setOpenCallback, setEdit }} />;
            case "edit":
                return <EditSubject {...{ _setOpenCallback }} />
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
