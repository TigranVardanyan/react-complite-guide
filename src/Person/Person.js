import React, {Component} from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className={'Person'}>
      <p onClick={props.click}>I'm a {props.name}, my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name}/>
    </div>
  )
};

export default person;