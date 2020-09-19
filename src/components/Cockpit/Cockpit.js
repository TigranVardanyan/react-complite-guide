import React, {useEffect, useRef, useContext} from 'react'
import classes from "./Cockpit.scss";
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log("[Cockipt] context",authContext)
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http request
    //setTimeout(()=> {
    //  alert('Save data to cloud')
    //}, 1000);
    toggleButtonRef.current.click();
    return () => {
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
  if (props.personsLength <= 2) {
    assignClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(" ")}>This is working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={() => props.clicked('Maximilian!!')}>
        Toggle Persons
      </button>
        <button onClick={authContext.login}>Log in</button>

    </div>
)
};

export default React.memo(cockpit);
