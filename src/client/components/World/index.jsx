import React from 'react';
import styles from './index.css';

const World = (props) => {
    return (
        <div>
            <h1 className={styles.test}>World {props.name}</h1>
        </div>
        )
}

export default World;