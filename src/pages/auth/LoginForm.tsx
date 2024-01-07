import Button from "../../components/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
  return (
    <Form className="overflow-hidden px-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="d-none">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button
        text="Login"
        onClick={() => console.log("clicked")}
        textColor="bg-font"
        bgColor="secondary-bg"
      />
    </Form>
  );
}

export default LoginForm;
