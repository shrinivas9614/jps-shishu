import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import "../../AdminLogin.css"; // Import custom CSS for styling
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const StudentLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      // console.log("values: ", values, process.env.REACT_APP_DJANGO_API_BASE_URL + "/login-user")
      setSubmitting(false);
      axios
        .post(process.env.REACT_APP_DJANGO_API_BASE_URL + "/login-user", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          email: values.username,
          password: values.password,
        })
        .then((response) => {
          console.log("response: ", response.data.profile.id);
          console.log(response);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "student Login successful",
            });
            navigate("/student-dashboard", {
              state: { data: { Id: response.data.profile.id } },
            });
          } else {
            alert("Failed to login username and password does not match");
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("Failed to login username and password does not match");
        });
    },
  });

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className="login-card">
              <Card.Body>
                <h2 className="login-heading">Student Login</h2>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.username
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    {formik.errors.username && formik.touched.username && (
                      <div className="text-danger">
                        {formik.errors.username}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="password" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    {formik.errors.password && formik.touched.password && (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    )}
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="submit-button"
                  >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentLogin;
