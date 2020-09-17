import React, {Component} from 'react';
import classes from './Person.css'



class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm a {this.props.name}, my age is {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} defaultValue={this.props.name}/>
      </div>
    )
  }
}

export default Person;