import React, {Component} from 'react';
import classes from './Person.css'


class Person extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('[Person.js] shouldComponentUpdate')
    //console.log('nextProps', nextProps)
    //console.group('Person')
    //console.log('nextProps', nextProps)
    //console.log('this.props', this.props)
    //console.groupEnd()
    //if (nextProps !== this.props) {
    //  return true;
    //} else {
    //  return false
    //}
    return true;
  }
  render() {
    console.log('[Person.js] rendering...');
    //console.log('Person.props', this.props);
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