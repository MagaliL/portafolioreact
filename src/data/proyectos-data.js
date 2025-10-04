import project1 from '../assets/proyectos-data/Veterinaria.jpg';
import project2 from '../assets/proyectos-data/clongoogle.jpg';
import project3 from '../assets/proyectos-data/porfoto.jpg';




// 2. CREAR Y EXPORTAR EL ARRAY DE DATOS
export const projectData = [
  {
    id: 1,
    title: "Veterinaria",
    description: "Página web hecha con Django que ayuda a la promoción de servicios y cuenta con una base de datos para la gestión de citas.",
    imageUrl: project1, // Usamos la variable importada
    imageAlt: "Imagen del proyecto",
    tech: ["Django,", "SQL,", "HTML,", "CSS,", "JS"],
    link: "https://vetapex.netlify.app/",
    github: "https://github.com/MagaliL"
  },,

  {
    id: 2,
    title: "Clon de Google",
    description: "Se realizó el clon de google",
    imageUrl: project2, // Usamos la variable importada
    imageAlt: "Imagen del proyecto",
    tech: ["HTML,","CSS,", "Git"],
    link: "https://clongooglemagalileg.netlify.app/",
    github: "https://github.com/MagaliL/clonGoogle"
  },

  {
    id: 3,
    title: "Portafolio Fotográfico",
    description: "Se realizó el portafolio fotográfico para cliente",
    imageUrl: project3, // Usamos la variable importada
    imageAlt: "Imagen del proyecto",
    tech: ["React,", "HTML,", "CSS,", "SQL"],
    link: "https://www.ejemplo.com",
    github: "https://github.com/usuario/project-analyzer"
  }
  
]