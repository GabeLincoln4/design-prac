import React from 'react';
import styles from '../data/styleData.js';

function Contact() {
    return (
        <div className={styles.contact.all}>
            <h2 className={styles.contact.title}>Contact Us!</h2>
            <div className={styles.contact.info}>
                <div>
                    <h3>Phone Number</h3>
                    <p>433-333-3333</p>
                </div>
                <div>
                    <h3>Email Address</h3>
                    <p>address@email.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;