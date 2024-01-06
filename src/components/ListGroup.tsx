import { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/ListGroup.module.css";

// ListGroup code adapted from Code with Mosh: http://tinyurl.com/msvtzhs

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, title, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Container fluid className="overflow-hidden px-4">
      <h1>{title}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default ListGroup;
