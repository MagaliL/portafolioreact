import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
       // Función que alterna el estado (abre y cierra)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(

    < header className={styles.header}>

        {/* 1. Botón/Ícono de Hamburguesa (Solo visible en móvil con CSS) */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
                ☰
        </button> 

        <nav className={`${styles.header__nav} ${isMenuOpen ? styles.navOpen : ''}`}>

           <ul className={styles.header__nav__list}>
            {/* <li className={styles.header__nav__list__element}><a href="" className={styles.header__nav__list__element}>About</a></li> */}
           <li className={styles.header__nav__list__element}><a href="#proyectos-enlace" className={styles.header__nav__list__element}  onClick={toggleMenu} >Projects</a></li>
           <li className={styles.header__nav__list__element }> <a href="#contacto-enlace" className={styles.header__nav__list__element}  onClick={toggleMenu} >Contact</a></li>
           </ul>
        </nav>
    </header>
    );
}

export default Header; 