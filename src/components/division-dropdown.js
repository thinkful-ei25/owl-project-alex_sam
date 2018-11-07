import React from 'react';

export default function DivisionDropdown(props) {
  return (
    <select className="division-dropdown" onChange={e=>props.changedDivision(e.target.value)}>
      <option value="" defaultValue>All</option>
      <option value="Atlantic">Atlantic</option>
      <option value="Pacific">Pacific</option>
    </select>
  );
}