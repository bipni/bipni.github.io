import React from 'react';
import styles from "./Introduction.module.css"
import mypic from "../image/mypicture.jpg"

class Introduction extends React.Component {

    render() {
        return(
            <div className={styles.introduction}>
                <img className={styles.mypic} src={mypic} alt="mirjawakil"/>
                <div className={styles.information}>
                    <span className={styles.name}>Mirja Wakil</span>
                    <span className={styles.designation}>Software Engineer</span>
                    <span className={styles.company}>Gaze Technology Inc.</span>
                </div>
            </div>
        );
    }
}

export default Introduction;