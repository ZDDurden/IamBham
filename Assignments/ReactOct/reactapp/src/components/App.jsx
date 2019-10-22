import React from "react";

// function App(props) {
//   return <h1>{props.hello}</h1>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Text", placeholder: "input", hasLoaded: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ hasLoaded: true });
  }
  render() {
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <h1>
            {this.props.hello} {this.state.text}
          </h1>
          <form>
            <input
              type="text"
              name={this.state.placeholder}
              onChange={this.handleChange}
            ></input>
          </form>
          <button onClick={this.handleSubmit}>Submit</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
          <button onClick={this.handleSubmit}>Submit</button>
        </React.Fragment>
      );
    }
  }
}

export default App;
