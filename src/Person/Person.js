import React, {Component} from 'react';
import Radium from 'radium'

import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  }
  return (
    <div className={'Person'} style={style}>
      <p onClick={props.click}>I'm a {props.name}, my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name}/>
    </div>
  )
};

export default Radium(person);