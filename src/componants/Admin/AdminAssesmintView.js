import { Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminAssesmentView = ({ _setOpenCallback }) => {
  return (
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
      <Card.Body>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th></th>
              <th>Date of asssement</th>
              <th>Assesment name</th>
              <th>Class</th>
              <th>Subject of assesment</th>
              <th>Question type</th>
              <th>Teacher name</th>
              <th>Total marks</th>
            </tr>
          </thead>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AdminAssesmentView;
