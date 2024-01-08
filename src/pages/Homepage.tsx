import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Button from "../components/Button";
import Like from "../components/Like";
import Modal from "../components/Modal";
import CodeOfConduct from "../components/CodeOfConduct";
import { useState } from "react";

function Homepage() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <NavBar />

      <Button
        onClick={() => console.log("clicked")}
        textColor="bg-font"
        bgColor="secondary-bg"
      >
        Add Review
      </Button>

      <Like onClick={() => console.log("Liked!")} />

      <Welcome />

      <Button onClick={toggleModal} textColor="bg-font" bgColor="secondary-bg">
        Open Modal
      </Button>

      <Modal isOpen={openModal} onClose={toggleModal}>
        <CodeOfConduct />
      </Modal>

      <Footer />
    </>
  );
}

export default Homepage;
