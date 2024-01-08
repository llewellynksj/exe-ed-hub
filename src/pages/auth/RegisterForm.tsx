import Button from "../../components/Button";
import Modal from "../../components/Modal";
import CodeOfConduct from "../../components/CodeOfConduct";
import { Form } from "react-bootstrap";
import { useState } from "react";

const RegisterForm = () => {
  return (
    <Form className="overflow-hidden px-4">
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control type="password" name="password1" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="d-none">Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="password2"
          placeholder="Repeat Password"
        />
      </Form.Group>

      <Button
        onClick={() => console.log("clicked")}
        textColor="bg-font"
        bgColor="secondary-bg"
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
