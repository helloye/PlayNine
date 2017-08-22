import React, { Component } from 'react';
import _ from 'lodash';

class Numbers extends Component {
  arrayOfNums = _.range(1, 10);

  render() {
    return (
      <div className="card text-center">
        <div>
          {this.arrayOfNums.map((number, i) =>
            <span key={i}>{number}</span>
          )}
        </div>
      </div>
    );
  }
}

export default Numbers;