import React, {Component} from 'react';
import classes from './Person.css'



const person = (props) => {
  console.log('[Person.js] rendering...');
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm a {props.name}, my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} defaultValue={props.name}/>
    </div>
  )
};

export default person;