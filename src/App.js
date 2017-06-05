import React, { Component } from 'react';
import './App.css';
import CreateGame from './CreateGame';
import Intro from './Intro';
import GameOver from './GameOver';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 0,
      gameTitle: ''
    };

    this.updateGameState = this.updateGameState.bind(this);
  }

  componentDidMount() {
    const { pathname } = window.location;

    if (pathname.split('/')[2]) {
      this.setState({
        gameState: 1,
        gameTitle: decodeURIComponent(pathname.split('/')[2])
      });
    }
  }

  updateGameState(state) {
    if (state.gameTitle) {
      window.ga('send', 'event', 'CreateGame', state.gameTitle);
      window.history.pushState({}, state.gameTitle, encodeURIComponent(state.gameTitle));
    }

    this.setState(state);
  }

  render() {
    const { gameState, gameTitle } = this.state;

    this.gameStates = [
      <CreateGame updateGameState={this.updateGameState} />,
      <Intro updateGameState={this.updateGameState} title={gameTitle} />,
      <GameOver updateGameState={this.updateGameState} />
    ];

    return (
      <div className="background">
        {this.gameStates[gameState]}
      </div>
    )
  }
}

export default App;
