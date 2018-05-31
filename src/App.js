import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import {DB_CONFIG} from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  render() {
    /*
    if (logged in){
      renderTheActualBudgetPage()
    }
    else {
      renderTheLoginPage()
    }
    */
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
