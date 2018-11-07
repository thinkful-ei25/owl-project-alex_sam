import React from 'react';

export default function Roster(props) {
  const roster = props.list.map((player, index) => 
    <li key={index} >
      <strong>{player.name}</strong>
      <p>{player.role}</p>
    </li>
  );

  return(
    <ul>{roster}</ul>
  );
}