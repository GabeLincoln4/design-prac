import React from 'react';

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>
            <ul>
                <li>Copyright @{year}</li>
                <ul>
                    <li>facebook icon</li>
                    <li>linkedin icon</li>
                </ul>
            </ul>
        </div>
    );
}

export default Footer;