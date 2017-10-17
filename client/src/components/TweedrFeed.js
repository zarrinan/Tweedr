import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {


  render() {
    return (
      <div>
        {this.props.tweeds.map((tweed, i) => {
          return <Tweed tweed={tweed} key={i} />
          })}
      </div>
    )
  }
}

export default TweedrFeed;
