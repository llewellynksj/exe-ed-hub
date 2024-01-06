interface Props {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: Props) {
  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Button;
