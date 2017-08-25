import React, { Component } from 'react';

class Button extends Component {
  button=null;
  refreshButton=null;

  renderButton(){
    if(this.props.answerIsCorrect === null){
      this.button =
        <button
          className={this.props.selectedNumbers.length > 0 ? 'btn-lg btn-primary' : 'btn-lg btn-default'}
          disabled={this.props.selectedNumbers.length === 0}
          onClick={this.props.handleCheckAnswer}
        >
          =
        </button>;
    }else if(this.props.answerIsCorrect){
      this.button =
        <button
          className='btn-lg btn-success'
          onClick={this.props.handleAcceptAnswer}
        >
          <i className="fa fa-check"/>
        </button>;
    }else {
      this.button =
        <button
          className='btn-lg btn-danger'
          onClick={this.props.handleCheckAnswer}
        >
          <i className="fa fa-times"/>
        </button>;
    }

    // TODO: Figure out why switch case keep reverting to default
    /*switch(this.props.answerIsCorret){
      case true:
        this.button =
          <button className='btn-lg btn-success'>
            <i className="fa fa-check"/>
          </button>;
        break;
      case false:
        this.button =
          <button className='btn-lg btn-danger'>
            <i className="fa fa-times"/>
          </button>;
        break;
      default:
        this.button =
          <button
            className={this.props.selectedNumbers.length > 0 ? 'btn-lg btn-primary' : 'btn-lg btn-danger'}
            disabled={this.props.selectedNumbers.length === 0}
            onClick={this.props.handleCheckAnswer}
          >
              =
          </button>;
        break;
    }*/
  }

  renderRefreshButton(){

    this.refreshButton = <button id="refresh-btn" className="btn-lg btn-warning"
                                 onClick={this.props.handleRedraw}
                                 disabled={this.props.redrawsLeft === 0}
    >
      <i className="fa fa-refresh"/>
      {this.props.redrawsLeft > 0 ? this.props.redrawsLeft : 'X'}
    </button>
  }

  render() {
    this.renderButton();
    this.renderRefreshButton();
    return (
      <div className="col-md-2">
        {this.button}
        {this.refreshButton}
      </div>
    );
  }
}

export default Button;