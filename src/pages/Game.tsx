import { useState } from "react";
import type { FunctionComponent, Squares } from "../common/types";
import Board from "../components/Board/Board";

export const Game = (): FunctionComponent => {
  const [history, setHistory] = useState<Array<Squares>>([
    [null, null, null, null, null, null, null, null, null],
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove] as Squares;

  function handlePlay(nextSquares: Squares): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo(move);
          }}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex h-screen flex-row items-center justify-center bg-gray-100">
      <div>
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="ml-5">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
