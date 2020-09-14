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

  switchNameHandler = (newName = 'Tigran') => {
    console.log('was clicked');
    this.setState({persons: [
        {name: newName, age:23},
        {name: 'Anna', age:20},
        {name: 'Anna', age:28},
        {name: 'Hermine', age:44},
      ]})
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler()}/>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}/>
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}>
            Props.children
          </Person>
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
