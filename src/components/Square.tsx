interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  const squareClass = value === "X" ? "square x" : value === "O" ? "square o" : "square";

  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
