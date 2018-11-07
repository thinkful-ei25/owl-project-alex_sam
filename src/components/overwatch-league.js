import React from 'react';

import Teams from './teams';
import teams from '../teams.json';

import DivisionDropdown from './division-dropdown';
import TeamSearch from './player-search';
import SortBy from './sort-by';

export default class OverwatchLeague extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      division: '',
      search: '',
      sortBy: ''
    }
  }

  setTeamSearch(search){
    this.setState({
      search
    })
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
    } else if(this.state.search){
      teamList = teams.filter(team => team.fullName.toLowerCase().includes(this.state.search.toLowerCase()));
    } else {
      teamList = teams;
    }
    
    return (
      <div className="main-page">
        <DivisionDropdown changedDivision={(div)=>(this.setDivision(div))}/>
        <SortBy changeSort={(sort)=>(this.setSort(sort))}/>
        <TeamSearch teamSearch={(search)=>(this.setTeamSearch(search))} />
        <Teams list={teamList} sort={this.state.sortBy}/>
      </div>
    );
  }
}