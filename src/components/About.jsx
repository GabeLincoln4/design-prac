import React from 'react';
import styles from '../data/styleData.js';
import InfoBox from "./InfoBox.jsx";

function About() {

    const companyBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Lectus magna fringilla urna porttitor rhoncus. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Id diam maecenas ultricies mi eget mauris. Fringilla phasellus faucibus scelerisque eleifend. Facilisis gravida neque convallis a. In iaculis nunc sed augue lacus viverra vitae congue eu. Quam pellentesque nec nam aliquam sem et tortor consequat. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Metus vulputate eu scelerisque felis imperdiet proin. Ac ut consequat semper viverra. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Viverra ipsum nunc aliquet bibendum enim facilisis gravida."
    const companyMission = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet. Suscipit tellus mauris a diam. Sagittis purus sit amet volutpat consequat mauris. Molestie a iaculis at erat. Vestibulum morbi blandit cursus risus at. Erat velit scelerisque in dictum non consectetur. Aliquam nulla facilisi cras fermentum odio eu feugiat. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Volutpat sed cras ornare arcu dui. Sit amet justo donec enim diam vulputate. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Convallis tellus id interdum velit laoreet id donec. A cras semper auctor neque. Pellentesque habitant morbi tristique senectus et netus et malesuada."

    return (
        <div className={styles.about.all}>
                <InfoBox 
                    title = "Company Biography"
                    description = {companyBio}
                    infoBoxStyle = {styles.about.bio}
                    titleStyle = {styles.about.title}
                    descriptionStyle = {styles.about.content}
                />
                <InfoBox 
                    title = "Company Mission"
                    description = {companyMission}
                    infoBoxStyle = {styles.about.mission}
                    titleStyle = {styles.about.missionTitle}
                    descriptionStyle = {styles.about.content}
                />
        </div>
    )
}

export default About;