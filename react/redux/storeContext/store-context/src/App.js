import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Content from './component/Content'
import store from './selfStore/store'
import PropTypes from 'prop-types'
class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext () {
    return {store}
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}
export default App;
