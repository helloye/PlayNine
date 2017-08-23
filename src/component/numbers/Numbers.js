import React, { Component } from 'react';
import _ from 'lodash';

class Numbers extends Component {
  arrayOfNums = _.range(1, 10);

  static isNumberSelected(number){
    //TODO: Check props.selectedNumbers here.
    return "selected";
  }

  render() {
    return (
      <div className="card text-center">
        <div>
          {this.arrayOfNums.map((number, i) =>
            <span key={i} className={this.isNumberSelected(number)}>{number}</span>
          )}
        </div>
      </div>
    );
  }
}

export default Numbers;