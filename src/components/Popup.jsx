import React from "react";
import styles from "./Popup.module.css";


function Popup({ isOpen, onClose, children }) {

    if (!isOpen) {
        return null; // Si no está abierto, no renderiza nada
    }

    return(
             // El Overlay (fondo oscuro que cubre toda la pantalla)
        <div className={styles.overlay} onClick={onClose}>
            {/* El Contenido del Modal (el cuadro flotante) */}
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times; {/* Símbolo de "X" */}
                </button>
                <div className={styles.content}>
                    {children} {/* Aquí va el contenido que le pases (formulario, texto, etc.) */}
                </div>
            </div>
        </div>
    );
}

export default Popup;