import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import { teal, purp } from 'Utilities';
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import User from './User';
import UserProvider from './UserProvider';
import Drag from './Drag';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <User />
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still what's up this is scott</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
          <section>
            <Drag />
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition
                    items={on}
                    from={{ opacity: 0, bg: teal, height: '0px' }}
                    enter={{ opacity: 1, bg: purp, height: '200px' }}
                    leave={{ opacity: 0, bg: teal, height: '0px' }}>
                    {on =>
                      on &&
                      (props => (
                        <Card
                          style={{
                            opacity: props.opacity,
                            background: props.bg,
                            overflow: 'hidden',
                            height: props.height
                          }}>
                          <h1>Please work</h1>
                          <h3>{props.bg}</h3>
                        </Card>
                      ))
                    }
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>
        </div>
      </UserProvider>
    );
  }
}

export default App;
