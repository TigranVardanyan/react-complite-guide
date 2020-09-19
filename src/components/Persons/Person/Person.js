import React, {Component} from 'react';
import classes from './Person.css'

import Aux from '../../../hoc/Auxiliary'
import withClass from "../../../hoc/withClass";
class Person extends Component {

  render() {
    console.log('[Person.js] rendering...');
    //console.log('Person.props', this.props);
    return (
      <Aux>
        <p key={'iaa'} onClick={this.props.click}>
          I'm a {this.props.name}, my age is {this.props.age}
        </p>
        <p key={'iab'}>{this.props.children}</p>
        <input
          key={'iac'}
          type="text"
          onChange={this.props.change}
          defaultValue={this.props.name}
        />
      </Aux>
    )
  }
}

export default withClass(Person, classes.Person);