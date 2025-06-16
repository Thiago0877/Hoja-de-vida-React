import Experiencia from './components/Experiencia'
import Educacion from './components/Educacion'
import StackTecnologias from './components/StackTecnologias'

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mi CV Dinámico</h1>
      <StackTecnologias />
      <Educacion />
      <Experiencia />
    </div>
  );
}

export default App;