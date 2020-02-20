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

  test = () => {
    this.setState({ characters: [] });
  }

  render() {
    // this.setState({ characters: [] })
    const {characters} = this.state

    return (
        <div className="grid-container" style={{paddingTop: '50px'}}>
          <div className="ui segment container">
            <Form handleSubmit={this.handleSubmit} test={this.test}/>
          </div>
          <div className="ui segment container" >
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
          </div>
        </div>
    );
  }
}





export default App;
