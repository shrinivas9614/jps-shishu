import React, { useCallback, useState ,useEffect} from "react";
import { Card, Nav, Tab,Row,Col,Button,Form, Table } from "react-bootstrap";
import Assesment from "../componants/Admin/Assesment";
import Adminsidebar from "../componants/Admin/adminSidebard";
import { QuestionConatiner } from "./questionContainer";
import Circle from "../componants/student/Questions/circle";
import Ques from "../componants/student/Questions/ques";
import api from "../componants/forms/APIS";

export const StudentContainer = () => {
  const [show, setShow] = useState("assement");
  const _setOpenCallback = useCallback((show) => {
    setShow(show);
  });
  const shows = () => {
    // eslint-disable-next-line default-case
    switch (show) {
      case "assement":
        return <Circle />;
      case "question":
        return <Ques />;
    }
  };

  const [view,setView]=useState([]);

  const getAssessment=()=>{
     api
       .get(`student/assessment/?grade_id=${2}`)
       .then((response) => {
        console.log("response data", response.data);
         setView(response.data); 
       })
       .catch((error) => {
         console.error(error); // handle any errors
       });
  }
  useEffect(() => {
    getAssessment();
  }, [])
  
  const [question,setQuestion]=useState([]);   
   const [currentIndex, setCurrentIndex] = useState(0);

   const handleNext = () => {
     if (currentIndex < testList.length - 1) {
       setCurrentIndex(currentIndex + 1);
     }
   };

   const handlePrevious = () => {
     if (currentIndex > 0) {
       setCurrentIndex(currentIndex - 1);
     }
   };
 function numberSerires(j) {
   
   if (j == 1 ) {
     return '१';
   }
   if (j == 2) {
     return '२';
   }
   if (j == 3 ) {
     return "३"
   }
   if(j==4){
    return "४";
   }
   if(j=5){
    return "५";
   }
   if(j=6){
    return "६";
   }
   
 }

 const [testStart,setTestStart]=useState(false);
 const [testList,setTestList]=useState([]);
 console.log("testlist",testList)
  return (
    <>
      <div
        className="content-wrapper-client-lead"
        style={{ minHeight: " 1043px" }}
      >
        <Card>
          <Card.Header className="m-3">MCQ QUESTIONS</Card.Header>
          <Card.Body>
            {testStart ? (
              <>
                {testList.length > 0 &&
                  testList.map((test, index) => (
                    <>
                      {test?.multiple_choice_question && (
                        <>
                          <Card.Title className="p-3 ">
                            <Row>
                              <Col lg={8}>
                                {" "}
                                प्रश्न {numberSerires(index + 1)}.{" "}
                                {test?.multiple_choice_question?.question}
                              </Col>
                            </Row>
                          </Card.Title>
                        </>
                      )}

                      <Row className="d-flex m-2 p-2 bg-white rounded">
                        <Col>
                          <Form className="p-5 mx-5">
                            <Form.Check type="radio" id="option">
                              <Form.Check.Input
                                type="radio"
                                name="option"
                                value="camel"
                              />
                              <Form.Check.Label className=" mx-5 text-center">
                                {test?.multiple_choice_question?.option1}
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check type="radio" id="option">
                              <Form.Check.Input
                                type="radio"
                                name="option"
                                value="camel"
                              />
                              <Form.Check.Label className=" mx-5 text-center">
                                {test?.multiple_choice_question?.option2}
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check type="radio" id="option">
                              <Form.Check.Input
                                type="radio"
                                name="option"
                                value="camel"
                              />
                              <Form.Check.Label className=" mx-5 text-center">
                                {test?.multiple_choice_question?.option3}
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check type="radio" id="option">
                              <Form.Check.Input
                                type="radio"
                                name="option"
                                value="camel"
                              />
                              <Form.Check.Label className=" mx-5 text-center">
                                {test?.multiple_choice_question?.option4}
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check type="radio" id="option">
                              <Form.Check.Input
                                type="radio"
                                name="option"
                                value="camel"
                              />
                              <Form.Check.Label className=" mx-5 text-center">
                                {test?.multiple_choice_question?.option5}
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check type="radio" id="option">
                              <Form.Check.Input
                                type="radio"
                                name="option"
                                value="camel"
                              />
                              <Form.Check.Label className=" mx-5 text-center">
                                {test?.multiple_choice_question?.option6}
                              </Form.Check.Label>
                            </Form.Check>
                          </Form>
                        </Col>
                      </Row>
                    </>
                  ))}
                <div className="text-center">
                  <Button className="m-sm-auto">Submit</Button>
                </div>
              </>
            ) : (
              <>
                <Table className="text-center">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Assessment</th>
                      <th>Test Duration</th>
                      <th>Test</th>
                    </tr>
                  </thead>
                  <tbody>
                    {view.length > 0 &&
                      view.map((test, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{test.name}</td>
                          <td>{test.test_duration}</td>
                          <th>
                            <Button
                              onClick={() => {
                                setTestStart(true);
                                setTestList(test?.questions);
                              }}
                            >
                              Start
                            </Button>
                          </th>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </>
            )}
          </Card.Body>

          {/* <Card.Header>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    _setOpenCallback("assement");
                  }}
                >
                  Assesment
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    _setOpenCallback("question");
                  }}
                >
                  Question
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>{shows()}</Card.Body> */}
        </Card>
      </div>
    </>
  );
};
