import { ChangeEvent, FormEvent } from "react";
import Button from "../../components/Button";
import { Form, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = registerData;

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    username: [],
    password1: [],
    password2: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("dj-rest-auth/registration/", registerData);
      navigate("/login");
    } catch (err: any) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Form className="overflow-hidden px-4" onSubmit={handleSubmit}>
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
      {errors.username?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

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
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
