import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 28 },
      { name: "Steph", age: 25 }
    ],
    otherState: 'some other value'

  };

  switchNameHandler = () => {
    // this.state.persons[0].name = 'Maximillian';
    this.setState({persons: [
      { name: "Maxmillian", age: 28 },
      { name: "Manu", age: 18 },
      { name: "Stephanie", age: 26 }
    ] })
  } 

  render() {
    return (
      <div className="App">
        <h1>Hello, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          My hobbies
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', React.createElement('div', {className: App}, '<h1>Does this work now</h1>'))
  }
}

export default App;
