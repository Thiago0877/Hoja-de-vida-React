// src/components/StackTecnologias.jsx
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];

const getColor = (tec) => {
  switch (tec) {
    case "JavaScript": return "bg-yellow-200 text-yellow-800";
    case "React": return "bg-blue-200 text-blue-800";
    case "Node.js": return "bg-green-200 text-green-800";
    default: return "bg-gray-200 text-gray-800";
  }
};

const StackTecnologias = () => (
  <div>
    <h2>Stack de Tecnologías</h2>
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {tecnologias.map((tec, i) => (
        <span key={i} className={`p-2 rounded ${getColor(tec)}`}>
          {tec}
        </span>
      ))}
    </div>
  </div>
);

export default StackTecnologias;
