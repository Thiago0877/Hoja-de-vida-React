import Experiencia from './components/Experiencia';
import { experiencias } from './data';
import { cabecera } from './data/cvData';

function App() {
  return (
    <div>
      <CabeceraCV {...cabecera} />
      <Perfil resumen={resumen} />
      <Experiencia experiencias={experiencias} />
    </div>
  );
}
