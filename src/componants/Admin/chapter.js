import React, { useCallback, useState } from 'react'
import Adminsidebar from './adminSidebard';
import { Card } from 'react-bootstrap';
import ChapterForm from '../forms/chpaterForm';
import { ChapterList } from './chpaterList';
import { EditChpater } from '../forms/editChapter';

export const Chapter = () => {
    const [show, setShow] = useState("list");
    const [edit, setEdit] = useState();
    const _setOpenCallback = useCallback((show) => {
        setShow(show);
    });

    const shows = () => {
        switch (show) {
            case "add":
                return <ChapterForm {...{ _setOpenCallback }} />;
            case "list":
                return <ChapterList {...{ _setOpenCallback, setEdit }} />;
            case "edit":
                return <EditChpater {...{ _setOpenCallback }} />;
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
                        <h5 className="text-center">Chapter</h5>
                        {shows()}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
