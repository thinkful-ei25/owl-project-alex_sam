import React from 'react';

import Roster from './roster';

export default function Teams(props){
  
  if(props.sort === 'name'){
    props.list.sort((a,b)=>(a.fullName>b.fullName) ? 1 : (a.fullName<b.fullName) ?-1:0);
  } else if (props.sort === 'losing') {
    props.list.sort((a,b)=>(a.record.wins>b.record.wins) ? 1 : (a.record.wins<b.record.wins) ?-1:0);
  } else if (props.sort === 'winning'){
    props.list.sort((a,b)=>(a.record.losses>b.record.losses) ? 1 : (a.record.losses<b.record.losses) ?-1:0);
  }

  const teams = props.list.map((team, index) => 
    <li key={index} className="flip-teamcard">
      <div className="flip-teamcard-inner">
        <div className="flip-teamcard-front">
          <strong>{team.fullName}</strong>
          <img src={team.image} alt={team.nickName}/>
          <span>{team.record.wins}W-{team.record.losses}L</span>
          <address className="location">{team.location}</address>
        </div>
        <div className='flip-teamcard-back'>
          <h1>Team Roster</h1>
          <div className="roster">
            <Roster list={team.roster}/>
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