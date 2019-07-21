import React, { Component } from "react";

class List extends Component {
  delete(item, index) {
    this.props.delete(item, index);
  }
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li
            onClick={() => {
              this.delete(item, index);
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
