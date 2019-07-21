import "./App.css";
import React, { Component } from "react";
import List from "./List";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      items: []
    };
    this.delete = this.delete.bind(this); //build delete function
  }
  delete(name, i) {
    let items = this.state.items.slice();
    items.splice(i, 1);
    this.setState({ items });
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
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <List items={this.state.items} delete={this.delete} />
                <form className="App" onSubmit={this.onSubmit}>
                  <MDBInput
                    value={this.state.content}
                    onChange={this.onChange}
                  />
                  <MDBBtn> submit</MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
