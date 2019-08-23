import React from 'react';
import Introduction from '../components/Introduction';
import styles from "./Homepage.module.css";

class Homepage extends React.Component {

    render() {
        return(
            <div className={styles.homepage}>
                <Introduction/>
            </div>
        );
    }
}

export default Homepage;