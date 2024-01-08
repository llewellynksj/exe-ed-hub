import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
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

const Button = ({
  children,
  textColor,
  bgColor,
  onClick,
  type = "button",
}: Props) => {
  return (
    <>
      <Container fluid className="d-flex justify-content-center">
        <button
          type={type}
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
