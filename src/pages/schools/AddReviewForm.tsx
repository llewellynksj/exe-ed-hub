import Modal from "../../components/Modal";
import { useState } from "react";
import Button from "../../components/Button";
import CodeOfConduct from "../../components/CodeOfConduct";
import { Form } from "react-bootstrap";

const AddReviewForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <div>
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
    </div>
  );
};

export default AddReviewForm;
