import type { FunctionComponent } from "../../common/types";

type SquareProps = {
  value: string | null | undefined;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps): FunctionComponent => {
  return (
    <button
      className="float-left -mr-px -mt-px flex h-20 w-20 items-center justify-center border-2 border-solid border-gray-400 bg-white p-0 text-center text-2xl font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
