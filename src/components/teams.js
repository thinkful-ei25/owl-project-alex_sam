import React from 'react';

export default function Teams(props){
  props.list.sort((a,b)=>(a.fullName>b.fullName) ? 1 : (a.fullName<b.fullName) ?-1:0);
  const teams = props.list.map((team, index) => 
    <li key={index} className="flip-teamcard">
      <div className="flip-teamcard-inner">
        <div className="flip-teamcard-front">
          <strong>{team.fullName}</strong>
          <img src={team.image} alt={team.nickName}/>
          <address className="location">{team.location}</address>
        </div>
        <div className='flip-teamcard-back'>
          <h1>Team Roster</h1>
          <div className="roster">
            SAMPLE
          </div>
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