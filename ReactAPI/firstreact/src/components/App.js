import React, { Component } from 'react';
import './styles.module.css';
import 'react-bootstrap'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    isLoaded: true,
                    items: data,
                })
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return 'Loading'
        } else {
            return (
                <div className="card" style={{width:"18rem",border:" 1px solid black"}} align="center">
                    <div className="card-body">
                        {items.map(item => (
                            <React.Fragment>
                                <h5 key={item.id} className="card-title">{item.title}</h5>
                                <p key={item.id} className="card-text">{item.description}</p>
                                <hr></hr>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                /*<div className="App">
                 <ul>
                     {items.map(item=>(
                         <li key={item.id}>
                            Title: {item.title}
                            Description: {item.description}
                         </li>
                     ))};
                 </ul>
                 </div>
             */
            )
        };
    }
}
export default App;