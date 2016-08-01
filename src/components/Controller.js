import React, { Component, PropTypes } from 'react';

const requestAnimationFrame = (
  window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame);

// const cancelAnimationFrame = (
//   window.cancelAnimationFrame
//   || window.mozCancelAnimationFrame);

class Controller extends Component {
  static propTypes = {
    playingFrameID: PropTypes.number.isRequired,
    stopGame: PropTypes.func.isRequired,
    nextGenaration: PropTypes.func.isRequired,
    randomMatrix: PropTypes.func.isRequired,
    clearMatrix: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.loop = this.loop.bind(this);
  }

  render() {
    const { playingFrameID, nextGenaration, stopGame, randomMatrix, clearMatrix } = this.props;
    return (
      <div>
        <button className="btn btn-success" onClick={playingFrameID ? stopGame : this.next}>
          {playingFrameID ? 'Stop' : 'Play'}
        </button>
        {' '}
        <button className="btn btn-default" onClick={() => nextGenaration(playingFrameID)}>
          Next
        </button>
        {' '}
        <button className="btn btn-default" onClick={randomMatrix}>Randomize</button>
        {' '}
        <button className="btn btn-default" onClick={clearMatrix}>Clear</button>
      </div>
    );
  }

  next() {
    this.props.nextGenaration(requestAnimationFrame(this.loop));
  }

  loop() {
    if (this.props.playingFrameID) {
      this.next();
    }
  }
}

export default Controller;
