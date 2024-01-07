import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  children: React.ReactNode;
  textColor?:
    | "bg-font"
    | "primary-font"
    | "secondary-font"
    | "tertiary-font"
    | "additional-font";
  bgColor?:
    | "main-bg"
    | "primary-bg"
    | "secondary-bg"
    | "tertiary-bg"
    | "additional-bg";
  onClick: () => void;
}

const Button = ({ children, textColor, bgColor, onClick }: Props) => {
  return (
    <>
      <Container fluid className="d-flex justify-content-center">
        <button
          type="button"
          className={textColor + " " + bgColor}
          onClick={onClick}
        >
          {children}
        </button>
      </Container>
    </>
  );
};

export default Button;
