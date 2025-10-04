import React from "react";
import styles from './Proy_carr.module.css';
import Button from './Button.jsx';

function Proy_carr ({project}){

     if (!project) return null;
     const { titulo, description, imageUrl, imageAlt, tech, projectUrl, githubUrl } = project;
    return(
        <section className={styles.cuerpo}>

                <div className={styles.titulo}>
                    <h3>{titulo}</h3>
                </div> 

                <div className={styles.imagen}>
                    <img src={imageUrl} alt={imageAlt} className={styles.projectImage} />
                </div>

                <div className={styles.descrip}>
                    <p>{description}</p>
                </div>

                <div className={styles.tech}>
                    {tech.map((t, index) => (
                            <span key={index} className={styles.techBadge}>{t}</span>
                        ))}
                </div>

        {/* Implementación de los botones para acciones */}
                <div className={styles.cardActions}>
                    <Button className={styles.link} href={projectUrl} >Ver Proyecto</Button>
                    <Button className={styles.github} href={githubUrl} >GitHub</Button>
                </div>

        </section>


    );
}

export default Proy_carr;
