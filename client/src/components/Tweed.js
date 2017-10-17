import React, { Component } from 'react';

class Tweed extends Component {


  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.tweed.tweed_text !== this.props.tweed.tweed_text;
  }

  render() {

    return (
      <div className="tweed">
        <h2>{this.props.tweed.tweed_text}</h2>

      </div>
    )
  }
}
export default Tweed;



