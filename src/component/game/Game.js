import React, { Component } from 'react';
import Star from '../star/Star';
import Answer from "../answer/Answer";
import Button from "../button/Button";
import Numbers from "../numbers/Numbers";

class Game extends Component {
  render() {
    return (
      <div className="container">
        <h1>Play Nine</h1>
        <hr />
        <div className="row">
          <Star/>
          <Button/>
          <Answer/>
        </div>
      <br/>
      <Numbers/>
      </div>
    );
  }
}

export default Game;