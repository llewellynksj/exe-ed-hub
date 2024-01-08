import Button from "../../components/Button";
import Modal from "../../components/Modal";
import CodeOfConduct from "../../components/CodeOfConduct";
import { Form } from "react-bootstrap";
import { useState } from "react";

const RegisterForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

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

      <div className="d-inline-flex justify-content-left my-1">
        <Button onClick={toggleModal} textColor="bg-font" bgColor="primary-bg">
          Read Code of Conduct
        </Button>
      </div>
      <Modal isOpen={openModal} onClose={toggleModal}>
        <CodeOfConduct />
      </Modal>

      <Form.Group className="my-3" controlId="formBasicCheckbox">
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
