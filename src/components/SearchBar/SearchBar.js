import React, {useState} from "react";

function SearchBar (props) {
    const [term, setTerm] = useState('');
    
    const search = () => {
        props.onSearch(term)
    }

    const handleTermChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div>
            <input 
                placeholder="Enter a song, album, or artist" 
                onChange={handleTermChange} />
            <button onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;