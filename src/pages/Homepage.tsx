import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import ListGroup from "../components/ListGroup";
import SchoolListFeed from "./schools/SchoolListFeed";
import Button from "../components/Button";

function Homepage() {
  let items = ["item1", "item2", "item3"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

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

      <ListGroup
        items={items}
        title="The List"
        onSelectItem={handleSelectItem}
      />

      <Footer />
    </>
  );
}

export default Homepage;
