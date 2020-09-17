import React from 'react';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = (props) => props.persons.map((person, index) => {
  return <Person
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      change={(event) => props.changed(event, person.id)}
    />
});


export default persons