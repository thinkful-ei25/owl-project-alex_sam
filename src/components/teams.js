import React from 'react';

export default function Teams(props){
  props.list.sort((a,b)=>(a.fullName>b.fullName) ? 1 : (a.fullName<b.fullName) ?-1:0);
  const teams = props.list.map((team, index) => 

  <li key={index} className="flip-teamcard">
    <div className="flip-teamcard-inner">
      <div class="flip-teamcard-front">
        <strong>{team.fullName}</strong>
        <img src={team.image} alt={team.nickName}/>
        <address className="location">{team.location}</address>
      </div>
      <div class="flip-teamcard-back">
        <h1>John Doe</h1> 
        <p>Architect & Engineer</p> 
       <p>We love that guy</p>
      </div>
    </div>
  </li>
  
  );
  return (
    <ul className="team-list">
      {teams}
    </ul>
  );
}