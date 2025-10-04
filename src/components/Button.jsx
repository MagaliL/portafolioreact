import React from 'react';
import styles from "./Button.module.css";


// El componente Button acepta las props 'children' y 'onClick'

function Button ({children, onClick, className, href}){

    if (href) {
        return (
            <a 
                href={href} 
                className={`${styles.primaryButton} ${className}`}
                // target="_blank" abre en una nueva pestaña 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return(
        <button
            className={`${styles.primaryButton} ${className}`}
            onClick={onClick}>

                {children}
                
            </button>
    );

}

export default Button; 