import React from 'react';
import styles from './Header.module.css';

function Header() {
    return(

    < header className={styles.header}>
        <nav className={styles.header__nav}>
           <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__element}>About</li>
           <li className={styles.header__nav__list__element}>Projects</li>
           <li className={styles.header__nav__list__element}>Contact</li>
           </ul>
        </nav>
    </header>
    );
}

export default Header; 