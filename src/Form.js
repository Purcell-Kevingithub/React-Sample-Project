import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      task: '',
    }

    this.state = this.initialState
  }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }



    render() {
        const { task } = this.state;
        
        return (
            <form onSubmit={e => { e.preventDefault(); }}>
            <input
                type="text"
                name="task"
                value={task}
                placeholder="Enter To-Do"
                onChange={this.handleChange} />
            <input className="ui inverted olive button" type="button" value="Submit" onClick={this.submitForm}  />
            </form>
            
        );
        }

}

export default Form;
