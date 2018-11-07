import React from 'react';

export default function Teams(props){
  props.list.sort((a,b)=>(a.fullName>b.fullName) ? 1 : (a.fullName<b.fullName) ?-1:0);
  const teams = props.list.map((team, index) => 
    <li key={index}>
      <strong>{team.fullName}</strong> - ({team.location})
      <img src={team.image} alt={team.nickName}/>
    </li>
  );
  return (
    <ul>
      {teams}
    </ul>
  );
}