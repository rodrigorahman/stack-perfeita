import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <div className="App-intro">
          <Counter 
            value={this.props.total}
            onIncrementAsync={() => this.props.asyncincrement()}
            onIncrement={() => this.props.increment()}
            onDecrement={() => ''}  
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {total: state.redu}
};
  
const mapDispatchToProps = dispatch => {
  return {
    increment: data => dispatch(increment(data)),
    asyncincrement: data => dispatch(asyncincrement(data))
  };
};


function increment(data) {
  return {
    type: 'INCREMENT',
    data
  }
}

function asyncincrement(data) {
  return {
    type: 'INCREMENT_ASYNC',
    data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
