import './App.css';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import Footer from './components/Footer.jsx';
import { TechIcons } from './assets/tech-icons.js';
import { projectData } from './data/proyectos-data.js'; 
import Proy_carr from './components/Proy_carr.jsx';

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
            
              <Button className='boton'>Contact</Button>

          </section>

          <aside className='image'>
            <img src='imagen.png' alt="Imagen un círculo luminoso de colores" />
            {/* TODO: Tal vez después se pueda hacer una función de girar  */}
          </aside>

        </div>

        <section className='tecnologias'> 
            {/* TODO: Después se puede agregar animación */}
            <h2 className='sec__titulo'>Tecnologías que domino</h2> 

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
          
            <div className='sub-sec'>
              <h2 className='sec__titulo'>Projects</h2> 
            </div>
            
            <div className='tarjetas'>
                {/* Aquí se define project que es un objeto que va a ser iterado por el método map() por el array projectData que tiene todos los datos que necesitamos para las tarjetas. El objeto se le pasa a el componente reutilizable Tarjetas para que pueda utilizar sus propiedades como project.titulo, project.descripcion*/}

            {projectData.map((project) => (

                <Proy_carr 
                  key={project.id}
                  project={project}
                />

            ))}

            </div>
          
        </section>
    
      </main>
 
      <Footer />
      
    </>
  );
}

export default App;
