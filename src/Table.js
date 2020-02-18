import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <div>To-do's</div>
  );
}

const TableBody = props => {


  const row = props.characterData.map((row, index) => {
    return (
      <ul key={index}>
        <li>
          <p>{row.task}</p>
          <button className="ui inverted green button">Finish</button>
          <button className="ui inverted red button" onClick={() => props.removeCharacter(index)}>Delete</button>
        </li>
      </ul>
    )
  })

  return <div>{row}</div>
  
}

class Table extends Component {
  render() {
    const { characterData, removeCharacter, test } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}  test={test}/>
      </table>
    )
  }
}

export default Table;