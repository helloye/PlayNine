import React, { Component } from 'react';

class DoneFrame extends Component {

  render() {
    return (
      <div id="done-frame" className="text-center">
        <h2>{this.props.doneStatus}</h2>
      </div>
    );
  }
}

export default DoneFrame;