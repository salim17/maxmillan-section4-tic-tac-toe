import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //do not ever update the state like this, always use anonymous function, because in the background react schedules this update and is not synchronous
    // setIsEditing(!isEditing); 
    // setIsEditing(!isEditing); // try this by having this line twice
    setIsEditing(editing => !editing); // now try this by having this line twice
}

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
