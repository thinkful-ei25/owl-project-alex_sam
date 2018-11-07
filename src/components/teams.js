import React from 'react';

export default function Teams(props){
  props.list.sort((a,b)=>(a.fullName>b.fullName) ? 1 : (a.fullName<b.fullName) ?-1:0);
  const teams = props.list.map((team, index) => 
    <li key={index} className="team-basic">
      <strong>{team.fullName}</strong>
      <img src={team.image} alt={team.nickName}/>
      <address className="location">{team.location}</address>
    </li>
  );
  return (
    <ul className="team-list">
      {teams}
    </ul>
  );
}