import React, { Component } from 'react';
import './Table.css';

const TableHeader = () => {
  return (
    <div><h2>To-do's</h2></div>
  );
}

const TableBody = props => {
  const row = props.characterData.map((row, index) => {
    return (
      <ul key={index}>
        <li>
          <p>{row.task}</p>
          <button className="ui inverted orange button" onClick={() => props.removeCharacter(index)}>Finish</button>
        </li>
      </ul>
    )
  })

  return <div>{row}</div>
  
}

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }
}

export default Table;