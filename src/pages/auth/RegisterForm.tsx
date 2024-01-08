import { ChangeEvent } from "react";
import Button from "../../components/Button";
import { Form } from "react-bootstrap";
import { useState } from "react";

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = registerData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <Form className="overflow-hidden px-4">
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className="d-none">Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="d-none">Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleChange}
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
