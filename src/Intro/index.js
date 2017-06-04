import React, { Component } from 'react';
import { func } from 'prop-types';
import classnames from 'classnames';
import introMusic from './intro-music.wav';
import startMusic from './start-music.wav';
import './intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blinking: false
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keypress', this.onKeyPress);

    this.introMusic = new Audio(introMusic);
    this.introMusic.loop = true;
    this.introMusic.play();

    this.startMusic = new Audio(startMusic);
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

    this.introMusic.pause();
    this.startMusic.play();

    this.setState({
      blinking: true
    });

    this.props.updateGameState(1);
  }

  render() {
    const { blinking } = this.state;
    const startStyles = classnames('intro-start', { blinking });

    return (
      <div className="intro">
        <div className="intro-title">OTAVIO'S QUEST</div>
        <div className={startStyles} onClick={this.onStartClick}>PRESS START (V1)</div>
      </div>
    );
  }
}

Intro.propTypes = {
  updateGameState: func
};

export default Intro;
