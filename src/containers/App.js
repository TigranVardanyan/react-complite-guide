import React, {Component} from 'react';
import classes from './App.css'
import Person from '../components/Persons/Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class App extends Component {
  state  = {
    persons: [
      {id: 'aiuais',name: 'Tigran', age:23},
      {id: 'adntas',name: 'Anna', age:20},
      {id: 'qwfsqa',name: 'Georg', age:21},
      {id: 'qfwsca',name: 'Hermine', age:44},
    ],
    otherState : 'some other value',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //const person = Object.assign({},this.state.persons[personIndex]); old version

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    })
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  tooglePersonHandler = () => {
    const  doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            </ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.Red
    }

    let assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I am react app</h1>
          <p className={assignClasses.join(" ")}>This is working!</p>
          <button
            className={btnClass}
            onClick={() => this.tooglePersonHandler('Maximilian!!')}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, 'Does it work?' )
  }
}

export default App;
