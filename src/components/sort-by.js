import React from 'react';

export default function SortBy(props){
  return (
    <select className="sort-by" onChange={e=>props.changeSort(e.target.value)}>
      <option value="name" defaultValue>Name</option>
      <option value="losing">Worst to Best Record</option>
      <option value="winning">Best to Worst Record</option>
    </select>
  );
}