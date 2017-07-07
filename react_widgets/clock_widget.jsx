import React from 'react';

class ClockWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      clock: new Date()
    });
  }

  render () {
    return (
      <div className="clock">
        <h2>Clock: </h2>
        <h2>{this.state.clock.toString()}</h2>
      </div>
    );
  }

  componentDidMount() {
    setInterval(this.tick, 100);
  }
}

export default ClockWidget;
