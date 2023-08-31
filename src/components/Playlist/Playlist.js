import React from "react";
import TrackList from "../Tracklist/Tracklist";

function Playlist (props) {
    const handleNameChange = (event) => {
        props.onNameChange(event.target.value)
    }

    return (
        <div>
            <h2>{props.playlistName}</h2>
            <input defalutValue={'New Playlist'} onChange={handleNameChange}/>
            <TrackList 
                tracks={props.playlistTracks} 
                onRemove={props.onRemove} 
                isRemoval={true}/>
            <button onClick={props.onSave}>Save to Spotify</button>
        </div>
    )

}

export default Playlist;