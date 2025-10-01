import './App.css';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
const portada = '/imagen.png'; 


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
            {/* Tal vez después se pueda hacer una función de girar  */}
          </aside>

        </div>

        <section className='tecnologias'>

          <h2>Tecnologías que domino</h2>

        </section>
      


       

        
      </main>
      
    </>
  );
}

export default App;
