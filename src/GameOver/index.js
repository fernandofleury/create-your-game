import React, { Component } from 'react';
import { func } from 'prop-types';
import './game-over.css';
import gameOver from './game-over.wav';

class GameOver extends Component {
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

    this.props.updateGameState(0);
  }

  render() {
    return (
      <div className="game-over">
        <div className="game-over-title">GAME OVER</div>
        <div className="game-over-start" onClick={this.onStartClick}>TRY AGAIN?</div>
      </div>
    );
  }
}

GameOver.propTypes = {
  updateGameState: func
};

export default GameOver;
