import React from 'react';

function InfoBox(props){
    return (
        <div className={props.infoBoxStyle}>
            <h1 className={props.titleStyle}>{props.title}</h1>
            <p className={props.descriptionStyle}>{props.description}</p>
        </div>
    );
}

export default InfoBox;