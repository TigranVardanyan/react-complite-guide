import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'blue'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I am react app</h1>
          <p className={classes.join(" ")}>This is working!</p>
          <button style={style}
                  onClick={() => this.tooglePersonHandler('Maximilian!!')}>
            Toggle
          </button>
          {persons}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, 'Does it work?' )
  }
}

export default App;
