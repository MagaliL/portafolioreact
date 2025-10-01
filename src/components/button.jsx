import React from 'react';
import styles from './Button.mudule.css';


// El componente Button acepta las props 'children' y 'onClick'

function Button ({children, onClick}){

    return(
        <Button
            className={styles.primaryButton}
            onClick={onClick}>
                {children}
                Contáctame
            </Button>
    );

}

export default Button; 