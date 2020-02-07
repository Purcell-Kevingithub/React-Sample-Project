import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>To-do's</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <ul key={index}>
        <li>
          {row.task}  
          <button className="ui inverted green button">Finish</button>
          <button className="ui inverted red button" onClick={() => props.removeCharacter(index)}>Delete</button>
        </li>
      </ul>
    )
  })

  return <tbody>{rows}</tbody>
  
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