import React, { useState } from "react";
import Person from './Person/Person'

  const app = props => {
  const [personsState, setPersonsState] =  useState({ persons: [
          {name: 'Max', age: 25},
          {name: 'Stephanie', age: 21},
          {name: 'George', age: 26},
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = (newName) => {
  
      setPersonsState({ persons: [
            {name: 'D', age: 25},
            {name: 'S', age: 21},
            {name: newName, age: 26},
          ]})

      
    
    }
  
   const nameChangedHandler = (event) => {
      this.setState({
        persons: [
          {name: event.target.value, age: 21},
          {name: 'Max', age: 28},
          {name: 'George', age: 26},
        ],
        
      })
    }


  return (
    <div className="App">
    <h1>Hi, I'm a React App</h1>
    <p>This is working</p>
    <button onClick={() => switchNameHandler('Max')}>Switch Name</button>
    <Person 
    name={personsState.persons[0].name} 
    age={personsState.persons[0].age}
    changed={nameChangedHandler}>My hobbies are racing</Person>
    <Person 
    name={personsState.persons[1].name} 
    age={personsState.persons[1].age}/>
    <Person 
    name={personsState.persons[2].name} 
    age={personsState.persons[2].age}
    click={switchNameHandler.bind(this, 'Maximillian')}
    />
    </div>
  
  );
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?' ));
}

export default app

// state = {
//   persons: [
//     {name: 'Max', age: 25},
//     {name: 'Stephanie', age: 21},
//     {name: 'George', age: 26},
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {
//   // console.log('Was clicked')
//   // this.state.persons[0].name = 'Maximillian'
//   this.setState({ persons: [
//     {name: 'D', age: 25},
//     {name: 'S', age: 21},
//     {name: 'G', age: 26},
//   ]})
// }
