const tecnologias = ["React", "Node.js", "JavaScript", "MySQL", "HTML", "CSS", "Python"];

const tiposPorTecnologia = {
  "React": "frontend",
  "Node.js": "backend",
  "JavaScript": "frontend",
  "MySQL": "base de datos",
  "HTML": "frontend",
  "CSS": "frontend",
  "Python": "backend"
};

const getColor = (tec) => {
  const tipo = tiposPorTecnologia[tec];
  switch (tipo) {
    case "frontend":
      return "bg-blue-200 text-blue-800";
    case "backend":
      return "bg-green-200 text-green-800";
    case "base de datos":
      return "bg-orange-200 text-orange-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

const StackTecnologias = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Stack de Tecnologías</h2>
    <div className="flex flex-wrap gap-2">
      {tecnologias.map((tec, i) => (
        <span key={i} className={`px-3 py-1 rounded text-sm font-medium ${getColor(tec)}`}>
          {tec}
        </span>
      ))}
    </div>
  </div>
);

export default StackTecnologias;
