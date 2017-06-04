import React, { Component } from 'react';
import './App.css';
import Intro from './Intro';
import GameOver from './GameOver';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 0
    };

    this.updateGameState = this.updateGameState.bind(this);
  }

  updateGameState(newState) {
    this.setState({
      gameState: newState
    });
  }

  render() {
    this.gameStates = [
      <Intro updateGameState={this.updateGameState} />,
      <GameOver updateGameState={this.updateGameState} />
    ];

    return (
      <div className="background">
        {this.gameStates[this.state.gameState]}
      </div>
    )
  }
}

export default App;
