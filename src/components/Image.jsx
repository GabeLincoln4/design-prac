import React from 'react';

function Image(props) {
    return (
        <div>
            <img src={props.url} alt={props.altTag} />
        </div>
    )
}

export default Image;