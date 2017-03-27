import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    objStyle : {backgroundColor: 'blue'},
    colors : [
      {id:1, name:'violet', color:'#f5aafb'},
      {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
      {id:3, name:'pale green', color:'#aafbde'},
      {id:4, name:'vermillon', color:'#fe532e'},
      {id:5, name:'sky blue', color:'#82c4fa'},
      {id:6, name:'salmon', color:'#fb8b8b'},
    ],
    new: {
      name: '',
      color: ''
    }
  }

  getNextId = () => {
    return this.state.colors.reduce( (acc, item) => Math.max(acc, item.id), 0) + 1;
  }

  changeColor = (col) => {
    this.setState({
      objStyle : {backgroundColor: col}
    });
  }

  addHandler = () => {
    const newColor  = { ...this.state.new, id: this.getNextId() };

    this.setState({
      colors : [ ...this.state.colors, newColor]
    });
  }

  handleNewChange = (key, value) => {
    this.setState({
      new : { ...this.state.new, [key]: value}
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
        <div className="container">
          <ul className="list-container">
            {
              this.state.colors.map( item =>
                <li key={item.id} style={{backgroundColor: item.color}}
                  onClick={() => this.changeColor(item.color)}>
                  {item.name}
                </li>
              )
            }
          </ul>
          <ul className="add-container">
            <li>
              <h3>Add a new color</h3>
            </li>

            <li>
              <label htmlFor="colName">Color name</label>
              <input name="colName" type="text"
                value={this.state.new.name}
                onChange={(e) => this.handleNewChange('name', e.target.value)}/>
            </li>

            <li>
              <label htmlFor="col">Color (hex)</label>
              <input name="col" type="text"
                value={this.state.new.color}
                onChange={(e) => this.handleNewChange('color', e.target.value)}/>
            </li>

            <li>
              <button onClick={this.addHandler}>Add</button>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default App;
