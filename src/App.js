import React, { Component } from "react";

class App extends Component {
  ChangeFocus = () => {
    this.input.focus();
    this.mydiv.style.backgroundColor = "yellow";
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="text"
          placeholder="Username"
        />
        <input type="text" placeholder="Password" />
        <div
          ref={(ref) => {
            this.mydiv = ref;
          }}
        >
          a
        </div>
        <button onClick={this.ChangeFocus}>포커스이동</button>
      </div>
    );
  }
}
export default App;
