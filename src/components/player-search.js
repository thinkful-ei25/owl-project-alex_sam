import React from 'react';

export default function TeamSearch(props) {
  return(
    <input 
      className="player-search" 
      placeholder='Search for a team...'
      onChange={e => props.teamSearch(e.target.value)}>
      </input>
  )
}