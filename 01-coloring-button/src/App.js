import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objStyle : {backgroundColor: 'blue'}
    };
  }

  changeColor(event) { // eslint-disable-line no-unused-vars
    if((this.state.objStyle.backgroundColor === 'blue')) {
      this.setState({
        objStyle : {backgroundColor: 'red'}
      });
    } else {
      this.setState({
        objStyle : {backgroundColor: 'blue'}
      });
    }

  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={this.state.objStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coloring button</h2>
        </div>

        <p className="App-intro">
          Quand je clique sur le bouton, je change la couleur de fond du header
        </p>

        <button onClick={this.changeColor.bind(this)}>CHANGE COULEUR</button>
      </div>
    );
  }
}

export default App;
