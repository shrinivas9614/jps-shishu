import React from "react";
import { Button, Form } from "react-bootstrap";

export default function AdminLogin() {
  return (
    <div>
      <h1>Admin Login</h1>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Username" />
        </Form.Group>

        <Form.Group>
          <Form.Label> Password</Form.Label>
          <Form.Control type="password" placeholder="Username" />
        </Form.Group>
        <Button type="submit"> Log in </Button>
      </Form>
    </div>
  );
}
