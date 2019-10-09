import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello, I'm a React App</h1>
       <p>This is really working!</p> 
       <Person name="Max" age="28"/>
       <Person name="Manu" age="25">My hobbies</Person>
       <Person name="Steph" age="26"/>
      </div>
    );
    // return React.createElement('div', React.createElement('div', {className: App}, '<h1>Does this work now</h1>'))
  }
}

export default App;
