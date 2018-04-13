import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { connect } from 'react-redux';
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import CEPRouting from './pages/cep.routing';

import { compose } from 'recompose';
import HomePage from './core/home.page';

class App extends Component {
  render() {
    const { menuActive } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div className="topnav">
            <Link className={menuActive === 'home' ? 'active' : ''} to='/'>Home</Link>
            <Link className={menuActive === 'consulta' ? 'active' : ''} to='/cep/'>Consulta CEP</Link>
          </div>
          <Switch>
            <Route key='cep' exact path="/" render={(props, history) => <HomePage history={history} {...props}/>} />
            <CEPRouting />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ root }) => {
  return { 
    ...root    
  }
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(App);
