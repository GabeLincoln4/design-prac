import React from 'react';
import styles from '../styleData';

function Image(props) {
    return (
        <div className={styles.image}>
            <img src={props.url} alt={props.altTag} />
        </div>
    )
}

export default Image;