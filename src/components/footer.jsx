import React from "react"
import styles from './Footer.module.css';

function Footer(){
    return(

        <section className={styles.contenedor}>
            <div className={styles.contacto}>
            <h4>Email: <a href="magalizethe@gmail.com" className={styles.link}>magalizethe@gmail.com</a></h4>
            <h4>Linkedin: <a href="https://www.linkedin.com/in/magaliespinosa/" className={styles.link}>Magali L. Espinosa Guzmán</a></h4>
            </div>

            <div className={styles.creditos}>

                <small>Esta página fue creada por Magali L. Espinosa Guzmán</small>
                <small>Cualquier duda: magalizethe@gmail.com</small>

            </div>

        </section>


        
    );
 
    
}


export default Footer;
    