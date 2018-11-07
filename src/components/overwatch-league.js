import React from 'react';

import Teams from './teams';
import teams from '../teams.json';

import DivisionDropdown from './division-dropdown';

export default class OverwatchLeague extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      division: ''
    }
  }

  setDivision(division){
    this.setState({
      division
    })
  }

  render(){
    console.log(teams);
    let teamList;
    if(this.state.division){
      teamList = teams.filter(team=>team.division === this.state.division);
    } else {
      teamList = teams;
    }
    
    return (
      <div>
        <DivisionDropdown changedDivision={(div)=>(this.setDivision(div))}/>
        <Teams list={teamList}/>
      </div>
    );
  }
}