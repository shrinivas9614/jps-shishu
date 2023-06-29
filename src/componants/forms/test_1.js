import { Card, Table } from "react-bootstrap";
import Adminsidebar from "../Admin/adminSidebard";
import {
  Col,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

function TestForm({ _setOpenCallback }) {
  return (
    <div>
      <Adminsidebar />
      <Card className="border-0">
        <Card.Body>
          {/* <Form> */}
          <div
            className="content-wrapper-client-lead"
            style={{ minHeight: " 1043px" }}
          >
            <section className="container-fluid-leads-grid">
              <div className="row">
                <div className="col-lg-10 margin-left-10">
                  <input
                    id="all"
                    className="test_type_chkbox quest_type_chkbox"
                    type="checkbox"
                  />
                  <span
                    className="que_tag margin-left-10"
                    style={{ fontWeight: "800", padding: "30px" }}
                  >
                    Select all questions
                  </span>
                </div>
              </div>

              <div className="row all_ques_div">
                <div className="row ques_div" id="assess_test_row">
                  <div className="row">
                    <div className="col-lg-10">
                      <input
                        id='{"question_id":797,"question_level":"EASY"}'
                        className="test_type_chkbox quest_type_chkbox"
                        type="checkbox"
                      />
                      &nbsp;&nbsp;
                      <span
                        className="oval"
                        style={{
                          backgroundColor: "rgb(20, 221, 94)",
                          marginTop: "5px",
                        }}
                      ></span>
                      <span className="que_tag">
                        <span>&nbsp;&nbsp;2.&nbsp;</span>
                        <span>
                          On a number line, when we add a positive integer, we
                        </span>
                      </span>
                    </div>
                    <div className="col-lg-1">
                      <input
                        id="weight797"
                        type="number"
                        placeholder="Marks"
                        className="form-control"
                        value="1"
                        style={{ paddingRight: "0px" }}
                      />
                    </div>
                    <div className="col-lg-1">
                      <span className="que_tag">marks</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-11">
                      <span className="que_option radio_check">
                        {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                        <span>
                          <p>move to the right</p>
                          <label>
                            <input
                              type="radio"
                              // value="a"
                              // checked={selectedOption === "a"}
                              // onChange={handleOptionChange}
                            />
                            Paris
                          </label>
                        </span>
                      </span>
                      <span className="que_option radio_check">
                        {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                        <span>
                          <p>move to the left</p>
                        </span>
                      </span>
                      <span className="que_option radio_check">
                        {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                        <span>
                          <p>do not move at all</p>
                        </span>
                      </span>
                      <span className="que_option">
                        {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                        <span>
                          <p>none of these.</p>
                        </span>
                      </span>
                      {/* <div>
                        <span style={{ color: "rgb(0, 0, 0)" }}>Chapter :</span>
                        <span>Integration of Positive integers</span>
                        <span style={{ color: "rgb(0, 0, 0)" }}>,Topic :</span>
                        <span>Positive integers</span>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="row ques_div" id="assess_test_row">
                  <div className="row">
                    <div className="col-lg-10">
                      <input
                        id='{"question_id":556,"question_level":"EASY"}'
                        className="test_type_chkbox quest_type_chkbox"
                        type="checkbox"
                      />
                      &nbsp;&nbsp;
                      <span
                        className="oval"
                        style={{
                          backgroundColor: "rgb(20, 221, 94)",
                          marginTop: "5px",
                        }}
                      ></span>
                      <span className="que_tag">
                        <span>&nbsp;&nbsp;3.&nbsp;</span>
                        <span>Test question</span>
                      </span>
                    </div>
                    <div className="col-lg-1">
                      <input
                        id="weight556"
                        type="number"
                        placeholder="Marks"
                        className="form-control"
                        value="2"
                        style={{ paddingRight: "0px" }}
                      />
                    </div>
                    <div className="col-lg-1">
                      <span className="que_tag">marks</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                      <span className="que_option radio_check">
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>
                          <p>A</p>
                        </span>
                      </span>
                      <span className="que_option radio_check">
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>
                          <p>B</p>
                        </span>
                      </span>
                      <span className="que_option radio_check">
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>
                          <p>C</p>
                        </span>
                      </span>
                      <span className="que_option">
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>
                          <p>D</p>
                        </span>
                      </span>
                      <div>
                        <span style={{ color: "rgb(0, 0, 0)" }}>Chapter :</span>
                        <span>Integration of Positive integers</span>
                        <span style={{ color: "rgb(0, 0, 0)" }}>,Topic :</span>
                        <span>Positive integers</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row" id="paginate">
                  <div className="row justify-content-center">
                    <button type="button" className="btn add_submit_btn mr-3">
                      Load More
                    </button>
                  </div>
                </div> */}

                <Row className="mb-2">
                  <Col md={12}>
                    <div className="d-flex gap-2 justify-content-center mt-3 ">
                      <Button variant="primary" type="submit" size="lg">
                        Load More
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
          </div>
          {/* </Form> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default TestForm;

{
  /* <div class="row ques_div" id="assess_test_row">
    <div class="row">
        <div class="col-lg-10"><input id="{&quot;question_id&quot;:556,&quot;question_level&quot;:&quot;EASY&quot;}"
                class="test_type_chkbox quest_type_chkbox" type="checkbox">&nbsp;&nbsp;<span class="oval"
                style="background-color: rgb(20, 221, 94); margin-top: 5px;"></span><span
                class="que_tag"><span>&nbsp;&nbsp;1.&nbsp;</span><span>Test question
                </span></span></div>
        <div class="col-lg-1"><input id="weight556" type="number" placeholder="Marks" class="form-control" value="2"
                style="padding-right: 0px;"></div>
        <div class="col-lg-1"><span class="que_tag">marks</span></div>
    </div>
    <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10"><span class="que_option radio_check"><span>&nbsp;&nbsp;&nbsp;</span><span>
                    <p>A</p>
                </span></span><span class="que_option radio_check"><span>&nbsp;&nbsp;&nbsp;</span><span>
                    <p>B</p>
                </span></span><span class="que_option radio_check"><span>&nbsp;&nbsp;&nbsp;</span><span>
                    <p>C</p>
                </span></span><span class="que_option"><span>&nbsp;&nbsp;&nbsp;</span><span>
                    <p>D</p>
                </span></span>
            <div><span style="color: rgb(0, 0, 0);">Chapter :</span><span>Integration of Positive integers</span><span
                    style="color: rgb(0, 0, 0);">,Topic :</span><span>Positive integers</span></div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-1"></div>
    <div class="col-lg-10"><span class="que_option radio_check"><span>&nbsp;&nbsp;&nbsp;</span><span>
                <p>A</p>
            </span></span><span class="que_option radio_check"><span>&nbsp;&nbsp;&nbsp;</span><span>
                <p>B</p>
            </span></span><span class="que_option radio_check"><span>&nbsp;&nbsp;&nbsp;</span><span>
                <p>C</p>
            </span></span><span class="que_option"><span>&nbsp;&nbsp;&nbsp;</span><span>
                <p>D</p>
            </span></span>
        <div><span style="color: rgb(0, 0, 0);">Chapter :</span><span>Integration of Positive integers</span><span
                style="color: rgb(0, 0, 0);">,Topic :</span><span>Positive integers</span></div>
    </div>
</div> */
}

// ============================================

// import React, { useState } from 'react';

// const TestForm = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Selected option:', selectedOption);
//     // You can perform additional logic here with the selected option
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Question:</h2>
//       <p>What is the capital of France?</p>

//       <label>
//         <input
//           type="radio"
//           value="a"
//           checked={selectedOption === 'a'}
//           onChange={handleOptionChange}
//         />
//         Paris
//       </label>

//       <label>
//         <input
//           type="radio"
//           value="b"
//           checked={selectedOption === 'b'}
//           onChange={handleOptionChange}
//         />
//         Madrid
//       </label>

//       <label>
//         <input
//           type="radio"
//           value="c"
//           checked={selectedOption === 'c'}
//           onChange={handleOptionChange}
//         />
//         Rome
//       </label>

//       <label>
//         <input
//           type="radio"
//           value="d"
//           checked={selectedOption === 'd'}
//           onChange={handleOptionChange}
//         />
//         London
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default TestForm;
