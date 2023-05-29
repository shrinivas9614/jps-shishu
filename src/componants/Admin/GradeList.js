import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../forms/APIS'

export const GradeList = ({ _setOpenCallback,setId }) => {
    const [grade, setGrade] = useState([])
    const get = () => {
        api
            .get("/grade-list")
            .then((response) => {
                console.log(response.data); // process the response data
                setGrade(response.data); // update the state with the fetched data
            })
            .catch((error) => {
                console.error(error); // handle any errors
            });
    };
    useEffect(() => {
        get();
    }, [])


  return (
   
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
          <th>#</th>
          <th>grade code</th>
          <th>created date</th>
          <th>updated date</th>
          <th>createedby</th>
          <th>updatedby</th>
          <th>name</th>
        </tr>
            </thead>
            <tbody>                          
              {
                grade.length>0 &&
                grade.map((tea,index)=>(
                    <>
                    <tr>
                        <td>{index+1}</td>
                        <td>{tea.firstname}</td>
                        <td>{tea.lastname}</td>
                        <td>{tea.email}</td>
                        <td>{tea.phone}</td>
                        <td>
                        <Button
                        onClick={()=>{
                            _setOpenCallback("teacherInfo")
                            setId(tea.id)}}
                        >
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </Button>    
                        </td>                                    
                    </tr>
                    </>
                ))
              }
            </tbody>
        </Table>
    </Card.Body>
</Card>
  );
}

export default GradeList;
        