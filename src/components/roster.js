import React from 'react';

export default function Roster(props) {
  const roster = props.list.map((player, index) => 
    <li key={index} className="player">
      <strong>{player.name}</strong><br/>
      <span> {player.role} </span>
    </li>
  );
  
  return(
    <ul>{roster}</ul>
  );
}