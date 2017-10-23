import React from 'react';
import styles from './index.css';

const Hello = (props) => {
    return (
        <div>
            <h1 className="test">Hello {props.name}</h1>
        </div>
    )
}

export default Hello;