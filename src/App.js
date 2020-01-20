import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Leaflet from "./LeafZoom/leaflet";
class App extends Component {


  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 25 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">

        {/* <button style={style} onClick={() => this.switchNameHandler('Maximillia!!!')}>Switch Name</button> */}
          {/* <ReactPanZoom>  */}
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/1_The_Opera_House_in_Sydney.jpg" height='200' width='200' /> */}
        {/* </ReactPanZoom>  */}
        {/* <Pan>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/1_The_Opera_House_in_Sydney.jpg" /> 
        </Pan> */}
        {/* <ImagePZ>
        <img src="http://ultraimg.com/images/0yS4A9e.jpg" /> 
        </ImagePZ> */}
      <Leaflet></Leaflet>

       
      </div>
     
    );
    
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
