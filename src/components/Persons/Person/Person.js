import React, {Component, Fragment} from 'react';
import classes from './Person.css'

import Aux from '../../../hoc/Auxiliary'

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
      <Fragment>
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
      </Fragment>
    )
  }
}

export default Person;