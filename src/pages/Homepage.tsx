import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import SchoolListFeed from "./schools/SchoolListFeed";
import Button from "../components/Button";

function Homepage() {
  return (
    <>
      <NavBar />

      <SchoolListFeed />

      <Button
        text="Add a Review"
        onClick={() => console.log("clicked")}
        textColor="bg-font"
        bgColor="secondary-bg"
      />

      <Welcome />

      <Footer />
    </>
  );
}

export default Homepage;
