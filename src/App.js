import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Menu, Input} from 'semantic-ui-react'
import Home from './Containers/Home';
import FeedUI from './Containers/FeedUI';

class App extends Component {
  loggedIn = () => {
    return localStorage.getItem('token') !== null
  }
  logout = (event) => {
    localStorage.clear()
    this.forceUpdate()
  }
  render() {
    return (
      <div className="App">
        <header>
          <Menu secondary>
            <Menu.Item onClick={this.handleItemClick}>
              {
                this.loggedIn()
                ? <NavLink to="/feeds"><h1>SIMPLE SYNDICATE</h1></NavLink>
                : <NavLink to="/"><h1>SIMPLE SYNDICATE</h1></NavLink>
              }
            </Menu.Item>
            <Menu.Menu position='right'>
              {
                this.loggedIn() ?
                <Menu.Item
                  name='logout'
                  onClick={this.logout}
                />
                : null
              }
            </Menu.Menu>
          </Menu>
        </header>
          <Switch>
            {
              this.loggedIn()
              ? <Route path='/feeds' render={(props) => (
                  <FeedUI />
                )}/>
              : <Route path="/" exact render={(props) => (
                  <Home />
                )}/>
            }
            {
              this.loggedIn()
              ? <Redirect to="/feeds"></Redirect>
              : <Redirect to="/"></Redirect>
            }
          </Switch>
      </div>
    );
  }
}

export default App;
