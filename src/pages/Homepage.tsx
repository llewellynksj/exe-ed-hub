import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Button from "../components/Button";

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

      <Welcome />

      <Footer />
    </>
  );
}

export default Homepage;
