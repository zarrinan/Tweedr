import React, { Component } from "react";

class TweedForm extends Component {
  render() {
    return (
      <form
        className="add-tweed-form"
        onSubmit={this.props.handleTweedSubmit}
      >
      <input id="addTweed"
          type="text"
          value={this.props.inputTweed}
          name="content"
          placeholder="Add Tweed Here"
          onChange={this.props.handleinputTweedChange}
        />
        <button id="submit">Tweed!</button>
      </form>
    );
  }
}

export default TweedForm;


