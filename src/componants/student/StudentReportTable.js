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
                <th className="table-header">Class</th>
                <th className="table-header">Student name</th>
                <th className="table-header">Date</th>
                <th className="table-header">Assesment name</th>
                <th className="table-header">Subject</th>
                <th className="table-header">Teacher Name</th>
                <th className="table-header">Status</th>
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
