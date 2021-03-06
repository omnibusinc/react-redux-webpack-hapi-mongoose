import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { getExample, getMongooseExample } from '../actionCreators/exampleActionCreators';

class AppContainer extends Component {

  getExampleFromServerAPI() {
    this.props.getExample();
  }

  getExampleFromMongoose() {
    this.props.getMongooseExample();
  }

  render() {
    const { example } = this.props; //ES6 Object destructuring reduces 'this.props' noise in your render functions.
    return(
      <div>
        <h2>This is the App's Container Component</h2>
        <Link to={ '/' }>Home</Link>
        <Link to={ '/about'}>About</Link>
        { this.props.children }
        <hr />
        <p>
          Value of 'example' is: <b>{ example }</b>
        </p>
        <button onClick={ this.getExampleFromServerAPI.bind(this) }>Get 'example' from server API</button>
        <button onClick={ this.getExampleFromMongoose.bind(this) }>Get 'example' from Mongo(ose)</button>
      </div>
    );
  }

};

//
const mapStateToProps = ({ example }) => ({ example });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getExample, getMongooseExample }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
