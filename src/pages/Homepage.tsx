import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Button from "../components/Button";
import Like from "../components/Like";
import { useState } from "react";

function Homepage() {
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

      <Footer />
    </>
  );
}

export default Homepage;
