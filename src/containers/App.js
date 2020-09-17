import React, {Component} from 'react';
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cocpit'

class App extends Component {
  state = {
    persons: [
      {id: 'aiuais', name: 'Tigran', age: 23},
      {id: 'adntas', name: 'Anna', age: 20},
      {id: 'qwfsqa', name: 'Georg', age: 21},
      {id: 'qfwsca', name: 'Hermine', age: 44},
    ],
    otherState: 'some other value',
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
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonHandler}
        />
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, 'Does it work?' )
  }
}

export default App;