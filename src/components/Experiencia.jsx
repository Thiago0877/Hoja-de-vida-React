const experienciaData = [
  {
    cargo: "Desarrollador Full Stack",
    empresa: "Navisoft Gaming",
    año: "2022-2024",
    descripcion: "Desarrollo completo de plataformas de videojuegos y backend en tiempo real."
  },
  {
    cargo: "Desarrollador de software",
    empresa: "Ubisoft",
    año: "2020-2022",
    descripcion: "Participación en el desarrollo de sistemas de juego y herramientas internas."
  },
  {
    cargo: "Software Engineer",
    empresa: "Google",
    año: "2019-2022",
    descripcion: "Implementación de soluciones escalables en la nube con enfoque en rendimiento."
  },
  {
    cargo: "Backend Developer",
    empresa: "Amazon",
    año: "2020-2023",
    descripcion: "Desarrollo de servicios RESTful y microservicios para e-commerce."
  },
  {
    cargo: "Full Stack Developer",
    empresa: "Microsoft",
    año: "2018-2021",
    descripcion: "Construcción de soluciones integrales en la nube con Azure y React."
  },
  {
    cargo: "Frontend Engineer",
    empresa: "Facebook (Meta)",
    año: "2021-",
    descripcion: "Optimización de interfaces de usuario con React y rendimiento accesible."
  },
  {
    cargo: "Software Developer",
    empresa: "IBM",
    año: "2016-2019",
    descripcion: "Desarrollo de soluciones empresariales y mantenimiento de sistemas heredados."
  },
  {
    cargo: "DevOps Engineer",
    empresa: "Netflix",
    año: "2020-2023",
    descripcion: "Automatización de despliegues y monitoreo de sistemas distribuidos."
  },
  {
    cargo: "Mobile Developer",
    empresa: "Apple",
    año: "2017-2020",
    descripcion: "Creación de aplicaciones iOS con Swift y mejora de experiencia de usuario."
  },
  {
    cargo: "Site Reliability Engineer",
    empresa: "Spotify",
    año: "2019-2022",
    descripcion: "Garantía de alta disponibilidad y rendimiento en plataformas de streaming."
  }
];

const Experiencia = () => (
  <div>
    <h2>Experiencia Laboral / Proyectos</h2>
    <ul>
      {experienciaData.map((exp, i) => (
        <li key={i}>
          <strong>{exp.cargo}</strong> en {exp.empresa} ({exp.año})<br />
          <em>{exp.descripcion}</em>
        </li>
      ))}
    </ul>
  </div>
);

export default Experiencia;
