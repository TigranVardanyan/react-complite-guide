import React from 'react'
import classes from "./Cockpit.scss";

const cockpit = (props) => {
  const assignClasses = [];
  let btnClass = [];
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am react app</h1>
      <p className={assignClasses.join(" ")}>This is working!</p>
      <button
        className={btnClass}
        onClick={() => props.clicked('Maximilian!!')}>
        Toggle Persons
      </button>
    </div>
)
};

export default cockpit