import React from 'react';
import styles from '../data/styleData';

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className={styles.footer.all}>
            <ul className={styles.footer.info}>
                <li>Copyright @{year}</li>
                <ul className={styles.footer.social}>
                    <li className={styles.footer.icon}>facebook icon</li>
                    <li className={styles.footer.icon}>linkedin icon</li>
                </ul>
            </ul>
        </div>
    );
}

export default Footer;