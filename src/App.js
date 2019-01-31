import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal } from 'elements';
import { Toggle } from 'utilities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Log In</button>
              <Modal on={on} toggle={toggle}>
                <h1>Gimme Dat Modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
