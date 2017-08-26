import React, { Component } from 'react';
import Star from '../star/Star';
import Answer from "../answer/Answer";
import Button from "../button/Button";
import Numbers from "../numbers/Numbers";
import DoneFrame from "./DoneFrame";
import _ from "lodash";

class Game extends Component {
  randomNumber = () => 1 + Math.floor(Math.random()*9);
  // Initial state.
  state = {
    selectedNumbers: [],
    usedNumbers: [],
    numOfStars: this.randomNumber(),
    answerIsCorrect: null,
    numOfRedraws: 5,
    doneStatus: null
  };

  selectNum = (clickedNum) => {
    if(this.state.selectedNumbers.indexOf(clickedNum) >= 0 || this.state.usedNumbers.indexOf(clickedNum) >= 0) return;
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNum)
    }))
  };

  unSelectNum = (clickedNum) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNum)
    }))
  };

  getSumOfSelected = () => {
    return this.state.selectedNumbers.reduce((acc, n) => acc + n, 0);
  };

  checkAnswer = () => {
    const isAnswerCorrect = (this.state.numOfStars === this.getSumOfSelected());
    this.setState({ answerIsCorrect: isAnswerCorrect });
    this.updateDoneState();
  };

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numOfStars: this.randomNumber()
    }), this.updateDoneState())
  };

  redraw = () => {
    const redrawsLeft = this.state.numOfRedraws > 0 ? this.state.numOfRedraws - 1 : 0;
    this.setState({
      selectedNumbers: [],
      answerIsCorrect: null,
      numOfStars: this.randomNumber(),
      numOfRedraws: redrawsLeft
    }, this.updateDoneState())
  };

  possibleCombinationSum = (arr, n) => {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return this.possibleCombinationSum(arr, n);
    }
    let listSize = arr.length, combinationsCount = (1 << listSize)
    for (let i = 1; i < combinationsCount ; i++ ) {
      let combinationSum = 0;
      for (let j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  };

  possibleSolution = (numOfStars, usedNumbers) => {
    if(usedNumbers.length===0) return true; //meaning no used numbers yet. game goes on...
    const possibleNums = _.range(1,10).filter(number =>
      usedNumbers.indexOf(number) === -1
    );

    return this.possibleCombinationSum(possibleNums, numOfStars);
  };

  updateDoneState = () => {
    if(this.state.usedNumbers.length === 9){
      this.setState({
        doneStatus: 'Done, Nice!!'
      })
    } else if (this.state.numOfRedraws <= 0 && !this.possibleSolution(this.state.numOfStars, this.state.usedNumbers)){
      this.setState({
        doneStatus: 'Game Over!'
      })
    }
  };

  render() {
    const { numOfStars, selectedNumbers, answerIsCorrect, usedNumbers, numOfRedraws, doneStatus } = this.state;
    return (
      <div className="container">
        <h1>Play Nine</h1>
        <hr />
        <div className="game-row">
          <Star
            numOfStars={numOfStars}
            doneStatus={doneStatus}
            updateDoneState={this.updateDoneState}
          />
          <Button
            selectedNumbers={selectedNumbers}
            answerIsCorrect={answerIsCorrect}
            handleCheckAnswer={this.checkAnswer}
            handleAcceptAnswer={this.acceptAnswer}
            handleRedraw={this.redraw}
            redrawsLeft={numOfRedraws}
            updateDoneState={this.updateDoneState}
          />
          <Answer
            selectedNumbers={selectedNumbers}
            handleSelectNumber={this.unSelectNum}
          />
        </div>
      <br/>
      {doneStatus ?
        <DoneFrame
        doneStatus={doneStatus}
        /> :
        <Numbers
          selectedNumbers={selectedNumbers}
          usedNumbers={usedNumbers}
          handleSelectNumber={this.selectNum}
        />
      }
      </div>
    );
  }
}

export default Game;