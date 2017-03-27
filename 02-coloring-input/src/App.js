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

  changeColor(event) {
    this.setState({
      objStyle : {backgroundColor: event.target.value}
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={this.state.objStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coloring input</h2>
        </div>
        <p className="App-intro">
          Quand je change la valeur du champ texte ci-dessous, je change la couleur de fond du header
        </p>
        <div>
          <label htmlFor="col">Couleur</label>
          <input name="col" type="text" value={this.state.objStyle.backgroundColor} onChange={this.changeColor.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
