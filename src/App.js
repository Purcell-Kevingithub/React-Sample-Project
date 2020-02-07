import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import './App.css';

class App extends Component {
  
  state = {
    characters: [],
  }

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {

    const {characters} = this.state

    return (
        <div className="grid-container">
          <div className="ui segment grid-item item1">
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
          </div>
          <div className="ui segment grid-item item2">
            <Form handleSubmit={this.handleSubmit}/>
          </div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item item5 ">5</div>



        </div>
    );
  }
}





export default App;
