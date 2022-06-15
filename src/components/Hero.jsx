import React from 'react';
import Image from './Image.jsx';
import images from '../imageData.js';

function createImage(image) {
    return <Image 
        url = {image.url}
        altTag = {image.altTag}
    />
}

function Hero() {

    return (
        <div>
            {images.map(createImage)}
            <h1>Company Name</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscin</h2> 
        </div>
        
    )
}

export default Hero;