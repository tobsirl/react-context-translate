import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <div>
          
        <button className="ui button primary">
        <LanguageContext.Consumer>
        {(value) => }
          </LanguageContext.Consumer>     
        </button>
      </div>
    );
  }
}

export default Button;
