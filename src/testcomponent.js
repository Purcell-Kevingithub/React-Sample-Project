import React, { Component } from 'react';
import './testcomponent.css';

class Testcomponent extends Component {

    render() {
      return (
        <div className="Testcomponent">
            <p>
                LETS MAKE THIS THING SHOW UPPPPPP
            </p>
            <button type="button" className={`btn btn-danger btn-lg`}>Choose Theme</button>
        </div>
      );
    }
  }

  export default Testcomponent;