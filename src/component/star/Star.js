import React, { Component } from 'react';
import _ from 'lodash';

class Star extends Component {
    componentDidUpdate() {
      if(!this.props.doneStatus)
        this.props.updateDoneState();
    }

    render() {
        return (
            <div className="col-md-5">
              {_.range(this.props.numOfStars).map(i =>
                <i key={i} className="fa fa-star"/>
              )}
            </div>
        );
    }
}

export default Star;