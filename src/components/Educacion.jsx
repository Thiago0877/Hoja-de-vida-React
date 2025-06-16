const educacionData = [
  {
    institucion: "SENA",
    curso: "Técnica en Sistemas",
    año: "2023-2024"
  },
  {
    institucion: "SENA",
    curso: "Tecnología en Análisis y Desarrollo de Software",
    año: "2025-2026"
  },
  {
    institucion: "Platzi",
    curso: "Curso Profesional de React.js",
    año: "2023"
  },
  {
    institucion: "Udemy",
    curso: "Curso de Node.js y Express",
    año: "2022"
  },
  {
    institucion: "FreeCodeCamp",
    curso: "Responsive Web Design Certification",
    año: "2021"
  }
];

const Educacion = () => (
  <div>
    <h2>Formación Académica</h2>
    <ul>
      {educacionData.map((edu, i) => (
        <li key={i}>
          <strong>{edu.curso}</strong> - {edu.institucion} ({edu.año})
        </li>
      ))}
    </ul>
  </div>
);

export default Educacion;
