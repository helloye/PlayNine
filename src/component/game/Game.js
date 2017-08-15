import React, { Component } from 'react';
import Star from '../star/Star';
import Answer from "../answer/Answer";
import Button from "../button/Button";

class Game extends Component {
  render() {
    return (
      <div className="container">
        <h1>Play Nine</h1>
        <div className="row">
          <Star/>
          <Button/>
          <Answer/>
        </div>
      </div>
    );
  }
}

export default Game;