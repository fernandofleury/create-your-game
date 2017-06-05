import React, { Component } from 'react';
import { func } from 'prop-types';
import gameOver from './GameOver.wav';
import './GameOver.css';

export default class GameOver extends Component {
  static propTypes = {
    updateGameState: func
  }

  constructor(props) {
    super(props);

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keypress', this.onKeyPress);

    this.gameOverMusic = new Audio(gameOver)
    this.gameOverMusic.play();
  }

  onKeyPress(e) {
    if (e.keyCode === 13) {
      this.handleStart();
    }
  }

  onStartClick() {
    this.handleStart();
  }

  handleStart() {
    window.removeEventListener('keypress', this.onKeyPress);

    this.gameOverMusic.pause();

    this.props.updateGameState({ gameState: 1 });
  }

  render() {
    return (
      <div className="game-over container">
        <div className="game-over-title">GAME OVER</div>
        <div className="start-button" onClick={this.onStartClick}>TRY AGAIN?</div>
      </div>
    );
  }
}
