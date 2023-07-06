import React, { useState, useEffect } from "react";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../forms/APIS";
import Swal from "sweetalert2";

export const StudentReportTable = ({ _setOpenCallback, setId }) => {
  return (
    <Card>
      <Card.Header
        style={{ backgroundColor: "transparent" }}
        className="border-0"
      ></Card.Header>
      <Card.Body>
        <div className="table-responsive">
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Class</th>
                <th> Student name</th>
                <th>Date</th>
                <th>Assesment name</th>
                <th>Subject</th>
                <th>Teacher Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1st</th>
                <th> shrinivas </th>
                <th>5/7/2023</th>
                <th>MCQ Test</th>
                <th>Marathi</th>
                <th>Suraj</th>
                <th>Pass</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
