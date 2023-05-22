import React from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel,  Row } from "react-bootstrap";
export default function GradeForm() {
  return (
    <div>
        <h2 className=''> Grade Form </h2>
        <Form>

        <Row>
        <Col md={4}>

            <FormGroup>
                <FormLabel>
                    Grade ID
                </FormLabel>
                <FormControl placeholder='grade ID' name='grade id' /> 
            </FormGroup>

        </Col>

      </Row>
      <Row>
         <Col md={4}>
            <FormGroup>
                <FormLabel>created by</FormLabel>
                <FormControl placeholder='created by'></FormControl>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup>
                <FormLabel>Updated by</FormLabel>
                <FormControl placeholder='Updated by'></FormControl>
            </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl placeholder='Name'/>
            </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
            <Button md={2} type='submit'> insert grade </Button>
        </Col>
      </Row>
        </Form>

      
    </div>
  )
}
