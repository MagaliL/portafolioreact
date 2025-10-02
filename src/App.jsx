import './App.css';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
const portada = '/imagen.png'; 
import { TechIcons } from './assets/tech-icons.js';
function App() {

  return(
    <>
      <Header />
      <main>

        <div className='frente'>
          <section className='saludo'>
              <h1 className='titulo'>HI I'M MAGALI, </h1>
              <h2 className='subtitulo'>Software Engenieer</h2>
              <p>Building modern, responsive, and user-centric web experiences. Data analysis to help drive decision-making</p>
            
              <Button className='boton'>Contáctame</Button>

          </section>

          <aside className='image'>
            <img src={portada} alt="Imagen de una computadora de la que salen figuras geométricas de un color cobre brillante" />
            {/* TODO: Tal vez después se pueda hacer una función de girar  */}
          </aside>

        </div>

        <section className='tecnologias'> 
            {/* TODO: Después se puede agregar animación */}
            <h2 className='tecnologias__titulo'>Tecnologías que domino</h2> 

            {/* Aquí van las imágenes de los íconos de las tecnologías */}
              <article className='tecnologias__article'>
                <img className='tecnologias__icono' src={TechIcons.iconoreact} alt="icono de react" />
                <img className='tecnologias__icono' src={TechIcons.iconojs} alt="icono de JS" />
                <img className='tecnologias__icono' src={TechIcons.iconocss} alt="icono de CSS" />
                <img className='tecnologias__icono' src={TechIcons.iconohtml} alt="icono de HTML" />
                <img className='tecnologias__icono' src={TechIcons.iconboots} alt="icono de Bootstrap" />
                <img className='tecnologias__icono' src={TechIcons.icongit}alt="icono de Github" />
                <img className='tecnologias__icono' src={TechIcons.iconpost}alt="icono de PostgreSQL" />
                <img className='tecnologias__icono' src={TechIcons.iconpy}alt="icono de Python" />   

            </article>
        </section>

        <section className='proyectos'>

        </section>
    
      </main>
      
    </>
  );
}

export default App;
