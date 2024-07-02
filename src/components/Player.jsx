import { useState } from "react";

export default function Player({ initialName, symbol , isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  console.log('Player component loading ... ');

  function handleEditClick() {
    //do not ever update the state like this, always use anonymous function, because in the background react schedules this update and is not synchronous
    // setIsEditing(!isEditing);
    // setIsEditing(!isEditing); // try this by having this line twice, ideally it should have no effect, but it does..
    setIsEditing((editing) => !editing); // now try this by having this line twice
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
