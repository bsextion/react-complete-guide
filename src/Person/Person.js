import React, { Component } from 'react'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <input type="text" onChange={props.changed}></input>
        </div>

    )
}

export default person