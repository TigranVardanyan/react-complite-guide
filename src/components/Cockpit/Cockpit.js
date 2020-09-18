import React, {useEffect} from 'react'
import classes from "./Cockpit.scss";

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http request
    const timer = setTimeout(()=> {
      alert('Save data to cloud')
    }, 1000);
    return () => {
      clearTimeout(timer)
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, /*[props.persons]*/ []) // set the second argument to
  // useEffect to call the function when the argument data
  // changes and set an empty array to call
  // when the component is first rendered

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })
  const assignClasses = [];
  let btnClass = '';
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
      <h1>{props.title}</h1>
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
