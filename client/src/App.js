import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TweedForm from './components/TweedForm';
import TweedrFeed from './components/TweedrFeed';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweeds: [],
      inputTweed:'',
    }
    this.handleinputTweedChange = this.handleinputTweedChange.bind(this);
    this.handleTweedSubmit = this.handleTweedSubmit.bind(this);
  }

componentDidMount(){
  axios.get('http://localhost:3001/api/tweeds')
  .then(res => {
    this.setState(prevState => {
      return {
        tweeds: res.data.data.tweeds,
      }
    });
  });
}

handleinputTweedChange(event) {
  this.setState({
    inputTweed: event.target.value
  });
}

handleTweedSubmit(event) {
  event.preventDefault();
  //event.target.tweed = '',
  console.log(this.state.inputTweed)
  axios.post('http://localhost:3001/api/tweeds', {
    tweed_text: this.state.inputTweed,
  })
  .then(res => {

    console.log(res.data.data.tweed);
    // if (res.data.tweed.id !== undefinded) {
      {
      const newTweed = {
      tweed_text: res.data.data.tweed.tweed_text,

    //console.log(res.data.data.tweeds);
    // if (res.data.tweed.id !== undefinded) {

      }
      //const newTweed = {
      //  tweed_text: res.data.tweed.tweed_text,
        //console.log(res.data.tweed.tweed_text)

     // }
      this.setState((prevState) => {
        return {
          tweeds: prevState.tweeds.concat(newTweed),
        }
      })
    }
  }).catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1>TWEEDR</h1>
        <h2>What Ya Thinking?</h2>
        </div>
        <div className="App-intro">
          <TweedForm handleTweedSubmit={this.handleTweedSubmit}
                     handleinputTweedChange={this.handleinputTweedChange}
                     inputTweed={this.state.inputTweed}
                     />
          <TweedrFeed tweeds={this.state.tweeds}/>
        </div>
      </div>
    );
  }
}

export default App;
