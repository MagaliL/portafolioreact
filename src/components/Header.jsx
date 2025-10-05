import React from 'react';
import styles from './Header.module.css';

function Header() {
    return(

    < header className={styles.header}>
        <nav className={styles.header__nav}>
           <ul className={styles.header__nav__list}>
            {/* <li className={styles.header__nav__list__element}><a href="" className={styles.header__nav__list__element}>About</a></li> */}
           <li className={styles.header__nav__list__element}><a href="#proyectos-enlace" className={styles.header__nav__list__element}>Projects</a></li>
           <li className={styles.header__nav__list__element}> <a href="#contacto-enlace" className={styles.header__nav__list__element}>Contact</a></li>
           </ul>
        </nav>
    </header>
    );
}

export default Header; 