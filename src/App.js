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
                <List items={this.state.items} />
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
