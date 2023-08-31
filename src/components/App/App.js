import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

function App(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

const search = term =>{
  Spotify.search(term).then(setSearchResults)
}

const addTrack = track => {
  if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)){
    return;
  } else {
    setPlaylistTracks((prevTracks) => [...prevTracks, track])
  }
}

const removeTrack = track => {
  setPlaylistTracks((playlistTracks) => playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id))
}

const updatePlaylistName = name => {
  setPlaylistName(name)
}

const savePlaylist = () => {
  const trackURIs = playlistTracks.map((track) => track.uri)
  Spotify.savePlaylist(playlistName, trackURIs).then(() => {
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  });
}

  return (
    <div className="App">
      <h1>Jammming</h1>
      <div className='App'>
        <SearchBar onSearch={search}/>
        <div>
          <SearchResults searchResults={searchResults} onAdd={addTrack}  />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
