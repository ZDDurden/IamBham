import React, { Component } from "react";
import "./Chirp.css";
import "react-bootstrap";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false
//     };
//   }
//   componentDidMount() {
//     fetch("localhost:5000/api/chirps", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         this.setState({
//           isLoaded: true,
//           items: data
//         });
//       });
//   }
// }
class Chirp extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <input id="new-chirp" type="text" placeholder="Create Chirp" />
          <input id="submit" type="button" value="Submit" />
        </form>

        <div class="chirp-container"></div>

        <div>
          <div>
            <div>
              <div>
                <h5>
                  <u>Edit Chirp</u>
                </h5>
                <button type="button">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <input type="text" placeholder="Edit" />
              <div>
                <button type="button">Close</button>
                <button type="button">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default 
Chirp;
