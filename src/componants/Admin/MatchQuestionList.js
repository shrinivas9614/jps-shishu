/** @format */
import { Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MatchQuestionList = () => {
  // return <div>MatchQues5434354543tionList</div>;
  return (
    <Card>
      <Card.Header
        style={{ backgroundColor: "transparent" }}
        className="border-0"
      >
        {/* <Row>
          <Col>
            <Link
              className="float-end fs-5"
              onClick={() => _setOpenCallback("add")}
            >
              Add
            </Link>
          </Col>
        </Row> */}
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Topic</th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default MatchQuestionList;
