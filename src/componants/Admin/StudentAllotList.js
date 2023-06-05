/** @format */

import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentAllotList = ({ _setOpenCallback }) => {
  console.log("_setOpenCallback", _setOpenCallback);
  return (
    <div>
      <Card>
        <Card.Header
          style={{ backgroundColor: "transparent" }}
          className="border-0"
        >
          <Row>
            <Col>
              <Link
                className="float-end fs-5"
                onClick={() => _setOpenCallback("add")}
              >
                Add
              </Link>
            </Col>
          </Row>
        </Card.Header>
      </Card>
    </div>
  );
};

export default StudentAllotList;
