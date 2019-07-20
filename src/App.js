import "./App.css";
import React, { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      items: []
    };
  }

  onChange = e => {
    this.setState({ content: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      content: "",
      items: [...this.state.items, this.state.content]
    });
  };
  render() {
    return (
      <div>
        <List items={this.state.items} />
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.content} onChange={this.onChange} />
          <button> submit</button>
        </form>
      </div>
    );
  }
}

export default App;
