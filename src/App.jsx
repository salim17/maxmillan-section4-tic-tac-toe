import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Log  from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  console.log('App component loading ... ');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) =>  (curActivePlayer === 'X' ? 'O' : 'X'))
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, // not setting player key directly to curActivePlayer for obvious reasons..
        ...prevTurns
      ]

      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <Gameboard turns={gameTurns} onSelectSquare={handleSelectSquare}/>
      </div>
      <Log />
    </main>
  );
}

export default App;
