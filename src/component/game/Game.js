import React, { Component } from 'react';
import Star from '../star/Star';
import Answer from "../answer/Answer";
import Button from "../button/Button";
import Numbers from "../numbers/Numbers";

class Game extends Component {
  state = {
    selectedNumbers: [2, 4]
  };
  render() {
    return (
      <div className="container">
        <h1>Play Nine</h1>
        <hr />
        <div className="row">
          <Star/>
          <Button/>
          <Answer selectedNumbers={this.state.selectedNumbers}/>
        </div>
      <br/>
      <Numbers selectedNumbers={this.state.selectedNumbers}/>
      </div>
    );
  }
}

export default Game;