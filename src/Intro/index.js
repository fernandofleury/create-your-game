import React, { Component } from 'react';
import { string, func } from 'prop-types';
import classnames from 'classnames';
import introMusic from './IntroMusic.wav';
import startMusic from './StartMusic.wav';
import './Intro.css';

export default class Intro extends Component {
  static propTypes = {
    updateGameState: func,
    title: string
  }

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

    document.title = this.props.title;

    this.introMusic = new Audio(introMusic);
    this.introMusic.play();
    this.introMusic.addEventListener('ended', () => {
      this.introMusic.currentTime = 0;
      this.introMusic.play();
    });

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

    setTimeout(() => {
      this.props.updateGameState({ gameState: 2 });
    }, 1000);
  }

  render() {
    const { blinking } = this.state;
    const { title } = this.props;
    const startStyles = classnames('start-button', { blinking });

    return (
      <div className="intro container">
        <div className="intro-title">{title}</div>
        <div className={startStyles} onClick={this.onStartClick}>PRESS START (ALPHA)</div>
      </div>
    );
  }
}
