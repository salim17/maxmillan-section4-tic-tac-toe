export default function Gameboard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

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
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  console.log("Gameboard component loading ... ");

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
