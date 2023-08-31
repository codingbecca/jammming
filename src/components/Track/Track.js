import React from "react";

function Track (props) {
    const addTrack = (event) => {
        props.onAdd(props.track)
    }

    const removeTrack = (event) => {
        props.onRemove(props.track)
    }

    const renderAction = () => {
        if (props.isRemoval) {
            return <button onClick={removeTrack}>-</button>
        } else {
            return <button onClick={addTrack}>+</button>
        }
    }
    
    return(
        <div>
            <div>
                {/* track name will go here */}
                <h3>{props.track.name}</h3>
                {/* track artist | album will go here */}
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {/* button to add or remove track will go here */}
            {renderAction()}
        </div>
    )
}

export default Track;