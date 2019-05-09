import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (
      <div>
        <ColorContext.Consumer>
          {color => (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {value => this.renderSubmit(value)}
              </LanguageContext.Consumer>
            </button>
          )}
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default Button;
