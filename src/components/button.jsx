import React from 'react';
import styles from "./Button.module.css";


// El componente Button acepta las props 'children' y 'onClick'

function Button ({children, onClick}){

    return(
        <button
            className={styles.primaryButton}
            onClick={onClick}>

                {children}
                
            </button>
    );

}

export default Button; 