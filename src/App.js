import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textColor = "black";
let defaultStyle = {
  color: textColor
}

let fakeServerData = {
  user: {
    name: "Daniel",
    playlists: [
      {
        name: "Playlist 1",
        songs: [
          {name: "Song 1", duration: 12345},
          {name: "Song 2", duration: 54321},
          {name: "Song 3", duration: 678910},
          {name: "Song 4", duration: 109876}
        ]
      },
      {
        name: "Playlist 2",
        songs: [
          {name: "Song 1", duration: 12345},
          {name: "Song 2", duration: 54321},
          {name: "Song 3", duration: 678910},
          {name: "Song 4", duration: 109876}
        ]
      },
      {
        name: "Playlist 3",
        songs: [
          {name: "Song 1", duration: 12345},
          {name: "Song 2", duration: 54321},
          {name: "Song 3", duration: 678910},
          {name: "Song 4", duration: 109876}
        ]
      },
      {
        name: "Playlist 4",
        songs: [
          {name: "Song 1", duration: 12345},
          {name: "Song 2", duration: 54321},
          {name: "Song 3", duration: 678910},
          {name: "Song 4", duration: 109876}
        ]
      },
    ]
  }
}


class PlaylistCounter extends Component{
  render() {
    return(
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h1 style={{fontSize: "34px"}}>{this.props.playlists.length} playlists</h1>
      </div>
    );
      
    
  }
}

class HoursCounter extends Component{
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    } , []);

    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0);
    return(
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h1 style={{fontSize: "34px"}}>{Math.round(totalDuration/60)} hours</h1>
      </div>
    );
      
    
  }
}

class Filter extends Component {
  render (){
    return(
      <div style={{...defaultStyle, fontSize: "18px"}}>
        <img/>
        <input type ="text" onKeyUp={event=> 
          this.props.onTextChange(event.target.value)}/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render () {
    let playlist = this.props.playlist;
    return(
      <div style={{...defaultStyle, width: "25%", display: "inline-block"}}> 
        <img/>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song =>
            <li>{song.name}</li>
            )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ""
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? 
        <div>
          <h1 style = {{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s playlist
          </h1>
        
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter onTextChange = {text => {
            console.log(text);
            this.setState({filterString: text})
          }}/>
          {
            this.state.serverData.user.playlists.filter(playlist =>
                playlist.name.toLowerCase().includes(
                  this.state.filterString.toLowerCase())
              ).map(playlist =>
                <Playlist playlist={playlist}/>
              )}
        </div> : <h1 style={defaultStyle}>Loading...</h1>
        }  
      </div>
    );
  }
}





export default App;
