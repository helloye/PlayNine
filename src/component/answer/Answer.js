import React, { Component } from 'react';

class Answer extends Component {
  constructor(props){
    super(props);
  }

  render() {
        return (
            <div className="col-md-5">
              {this.props.selectedNumbers.map((number, i) =>
                <span key={i}>{number}</span>
              )}
            </div>
        );
    }
}

export default Answer;