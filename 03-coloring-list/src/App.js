import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    objStyle : {backgroundColor: 'blue'},
  }

  colors = [
    {id:1, name:'violet', color:'#f5aafb'},
    {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
    {id:3, name:'pale green', color:'#aafbde'},
    {id:4, name:'vermillon', color:'#fe532e'},
    {id:5, name:'sky blue', color:'#82c4fa'},
    {id:6, name:'salmon', color:'#fb8b8b'},
  ]

  changeColor = (col) => {
    this.setState({
      objStyle : {backgroundColor: col}
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
          <ul className="list-contaner">
            {
              this.colors.map( item =>
                <li key={item.id} style={{backgroundColor: item.color}}
                    onClick={() => this.changeColor(item.color)}>
                  {item.name}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
