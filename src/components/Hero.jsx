import React from 'react';
import Image from './Image.jsx';
import images from '../data/imageData.js';
import styles from '../data/styleData.js';

function createImage(image) {
    return <Image 
        url = {image.url}
        altTag = {image.altTag}
    />
}

function Hero() {

    return (
        <div className={styles.hero.all}>
            {images.map(createImage)}
            <div className={styles.hero.textBox}>
                <h1 className={styles.hero.title}>Company Name</h1>
                <h2 className={styles.hero.slogan}>Lorem ipsum dolor sit amet, consectetur adipiscin</h2> 
            </div>
            
        </div>
        
    )
}

export default Hero;