import Button from "../../components/Button";
import { Form } from "react-bootstrap";

const RegisterForm = () => {
  return (
    <Form className="overflow-hidden px-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control type="password" name="password1" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control
          type="password"
          name="password2"
          placeholder="Repeat Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree to the ExeEd Hub Code of Conduct"
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
