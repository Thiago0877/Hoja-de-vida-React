export default function Experiencia() {
  const experiencia = [
    { id: 1, puesto: "Desarrollador Full Stack", empresa: "Navisoft Gaming", periodo: "2022-2024"},
    { id: 2, puesto: "Desarrollador de software", empresa: "Ubisoft", periodo: "2020-2022"},
    { id: 3, puesto: "Software Engineer", empresa: "Google", periodo: "2019-2022"},
    { id: 4, puesto: "Backend Developer", empresa: "Amazon", periodo: "2020-2023"},
    { id: 5, puesto: "Full Stack Developer", empresa: "Microsoft", periodo: "2018-2021"},
    { id: 6, puesto: "Frontend Engineer", empresa: "Facebook (Meta)", periodo: "2021-"},
    { id: 7, puesto: "Software Developer", empresa: "IBM", periodo: "2016-2019"},
    { id: 8, puesto: "DevOps Engineer", empresa: "Netflix", periodo: "2020-2023"},
    { id: 9, puesto: "Mobile Developer", empresa: "Apple", periodo: "2017-2020"},
    { id: 10, puesto: "Site Reliability Engineer", empresa: "Spotify", periodo: "2019-2022"}
  ];

  // Renderiza condicionalmente si no hay experiencia
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}