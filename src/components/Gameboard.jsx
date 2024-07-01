import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // if your state is an object or an array, you have to update it in an immutable way!!!
  // i.e. react always recommends to create a deep copy of the object or array and then update it.
  // Reason is that object and arrays are reference values in javascript.
  // const clonedUser = {...user} // this will create deep copy of user object.

  //   const user = {
  //     name: 'salim',
  //     age: 10,
  //     address: {
  //         kanpur: "jajmau",
  //         kolkata: "tirreti"
  //     }
  //   }

  // this will create a deep copy of user but not for address key, so find a way to it also...
  //   const updatedUser = {
  //     ...user
  //   }

  // for arrays check below how it is done.. 
  function handleSelectSquare(rowIndex, colIndex) {
    console.log("qeqeq");
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
