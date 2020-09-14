import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state  = {
    persons: [
      {name: 'Tigran', age:23},
      {name: 'Anna', age:20},
      {name: 'Anna', age:21},
      {name: 'Hermine', age:44},
    ],
    otherState : 'some other value',
    showPersons: false,
  };

  nameChangedHandler = (event) => {
    console.log('was clicked');
    this.setState({
      persons: [
        {name: 'Tigran', age:23},
        {name: 'Anna', age:20},
        {name: 'Anna', age:28},
        {name: event.target.value, age:44},
      ]})
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  tooglePersonHandler = () => {
    const  doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  render() {

    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>This is working!</p>
        <button style={style} onClick={() => this.tooglePersonHandler('Maximilian!!')}>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, 'Does it work?' )
  }
}

export default App;
