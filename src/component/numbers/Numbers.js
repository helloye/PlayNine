import React, { Component } from 'react';
import _ from 'lodash';

class Numbers extends Component {
  arrayOfNums = _.range(1, 10);

  isNumberSelected(number){
    if(this.props.usedNumbers.indexOf(number) >= 0) {
      return "used";
    }
    if(this.props.selectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
  }

  render() {
    return (
      <div className="card text-center">
        <div>
          {this.arrayOfNums.map((number, i) =>
            <span key={i}
                  className={this.isNumberSelected(number)}
                  onClick={() => this.props.handleSelectNumber(number)}
            >{number}</span>
          )}
        </div>
      </div>
    );
  }
}

export default Numbers;