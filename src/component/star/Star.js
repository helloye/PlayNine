import React, { Component } from 'react';
import _ from 'lodash';

class Star extends Component {
    numOfStars = 1 + Math.floor(Math.random()*9);

    constructor(props){
      super(props);
    }

    render() {
        return (
            <div className="col-md-5">
              {_.range(this.numOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
              )}
            </div>
        );
    }
}

export default Star;