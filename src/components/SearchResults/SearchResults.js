import React from "react";
import TrackList from "../Tracklist/Tracklist";

function SearchResults (props) {
    return(
    <div>
        <h2>Results</h2>
        <TrackList 
        tracks={props.searchResults} 
        onAdd={props.onAdd}
        isRemoval={false}/>
    </div>
    )
    
}

export default SearchResults;