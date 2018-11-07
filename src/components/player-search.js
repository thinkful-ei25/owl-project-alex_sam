import React from 'react';

export default function PlayerSearch(props) {
  return(
    <input 
      className="player-search" 
      placeholder='Search for a player...'
      onChange={e => props.playerSearch(e.target.value)}>
      </input>
  )
}