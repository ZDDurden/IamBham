import React, { Component } from "react";
import "./App.css";
import "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          isLoaded: true,
          items: data
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return "Все счастли́вые се́мьи похо́жи друг на дру́га, ка́ждая несчастли́вая семья́ несчастли́ва по-сво́ему.";
    } else {
      return (
        <div
          className="card"
          style={{ width: "18rem", border: " 1px solid black" }}
          align="center"
        >
          <div className="card-body">
            {items.map(item => (
              <React.Fragment>
                <h4 key={item.id} className="card-title">
                  {item.title}
                </h4>
                <p key={item.id} className="card-text">
                  {item.description}
                </p>
                <hr></hr>
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }
  }
}
export default App;
