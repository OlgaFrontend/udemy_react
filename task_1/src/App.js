import React, { Component } from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'mister X',
  }

  usernameChangedHandler = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username} />
        <UserOutput userName="Olga" userAge="28"/>
        <UserOutput userName="Alex" userAge="32"/>
        <UserOutput userName={this.state.username} userAge="28"/>
      </div>
    );
  }
}

export default App;
