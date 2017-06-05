import React, { Component } from 'react';
import { func } from 'prop-types';
import './CreateGame.css';

class CreateGame extends Component {
  static propTypes = {
    updateGameState: func
  }

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.input.value) {
      this.props.updateGameState({ gameState: 1, gameTitle: this.input.value })
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="create-game container">
        <div className="create-game-title">INSERT THE GAME TITLE</div>
        <input className="create-game-input" ref={(input) => this.input = input} />
        <button className="start-button" type="submit">CREATE GAME</button>
      </form>
    );
  }
}

export default CreateGame;
