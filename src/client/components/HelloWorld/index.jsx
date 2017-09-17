import React from 'react';
import styles from './index.css';

const HelloWorld = (props) => {
    return (
        <div>
            <h1 className={styles.test}>Hello {props.name}</h1>
        </div>
        )
}

export default HelloWorld;