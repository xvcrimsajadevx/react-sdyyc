import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Footer, SignUp } from './components'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <SignUp />
        <Footer/>
      </div>
    );
  }
}

export default App;
