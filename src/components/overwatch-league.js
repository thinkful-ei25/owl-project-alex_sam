import React from 'react';

import Teams from './teams';
import teams from '../teams.json';

import DivisionDropdown from './division-dropdown';
import SortBy from './sort-by';

export default class OverwatchLeague extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      division: '',
      sortBy: ''
    }
  }

  setDivision(division){
    this.setState({
      division
    })
  }

  setSort(sortBy){
    this.setState({
      sortBy
    })
  }

  render(){
    let teamList;
    if(this.state.division){
      teamList = teams.filter(team=>team.division === this.state.division);
    } else {
      teamList = teams;
    }
    
    return (
      <div className="main-page">
        <DivisionDropdown changedDivision={(div)=>(this.setDivision(div))}/>
        <SortBy changeSort={(sort)=>(this.setSort(sort))}/>
        <Teams list={teamList} sort={this.state.sortBy}/>
      </div>
    );
  }
}