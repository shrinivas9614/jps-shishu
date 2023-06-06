import React,{useState,useCallback} from 'react'
import { Card, Nav } from 'react-bootstrap'
import QuestionForm from '../componants/forms/QuestionForm'
import { MCQQuestioType, MCQQuestioTypen } from '../componants/Admin/mcqquestion'

export const QuestionConatiner = () => {
    const [show, setShow] = useState("mcq")
    const _setOpenCallback = useCallback(
        (show) => {
            setShow(show)
        },
    )
    const shows = () => {
        switch (show) {
            case "mcq": return (<MCQQuestioType/>)
        }
    }
    return (
        <>
            <Card>
                <Card.Header>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => { _setOpenCallback("mcq") }}
                            >Objective</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link
                                onClick={() => { _setOpenCallback("mcq") }}
                            >Match the pairs</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {shows()}
                </Card.Body>
            </Card>
        </>
    )
}
