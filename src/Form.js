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
          <div>
              <form className="ui input" onSubmit={e => { e.preventDefault(); }}>
                <input
                    type="text"
                    name="task"
                    value={task}
                    placeholder="Enter To-Do"
                    onChange={this.handleChange} />
                </form>
              <br/>
              <br/>
              <input className="ui inverted orange button" type="button" value="Submit" onClick={this.submitForm}/>
              <button className="ui inverted blue button" onClick={() => this.props.test()}>Reset All</button>
          </div>
            
        );
        }

}

export default Form;
