import React, {Component} from 'react';
import classes from './Person.css'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxiliary'
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super();
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus()
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    //console.log('Person.props', this.props);
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) => this.props.isAuth ?
            <p>Authenticated!</p> :
            <p>Please log in</p>}
        </AuthContext.Consumer>
        <p key={'iaa'} onClick={this.props.click}>
          I'm a {this.props.name}, my age is {this.props.age}
        </p>
        <p key={'iab'}>{this.props.children}</p>
        <input
          key={'iac'}
          //ref={(inputEl) => {
          //  this.inputElement = inputEl
          //}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);