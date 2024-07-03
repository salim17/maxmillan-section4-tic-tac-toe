import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Log  from "./components/Log";

import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  console.log('App component loading ... ');

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) =>  (curActivePlayer === 'X' ? 'O' : 'X'))
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

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
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
