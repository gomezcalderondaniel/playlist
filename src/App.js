import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textColor = "black";
let defaultStyle = {
  color: textColor
}

let fakeServerData = {
  user: {
    name: "Daniel"
  }
}


class Agregate extends Component{
  render() {
    return(
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h1 style={{fontSize: "34px"}}>Number and Text</h1>
      </div>
    );
      
    
  }
}

class Filter extends Component {
  render (){
    return(
      <div style={{...defaultStyle, fontSize: "18px"}}>
        <img/>
        <input type ="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render () {
    return(
      <div style={{...defaultStyle, width: "25%", display: "inline-block"}}> 
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {


  render() {
    let name = "Daniel";
    return (
      <div className="App">
      <h1 style = {{...defaultStyle, 'font-size': '54px'}}>{fakeServerData.user.name}'s playlist</h1>
      <Agregate/>
      <Agregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
    );
  }
}





export default App;
