import Perfil from './components/Perfil';
import { resumen } from './data';
import { cabecera } from './data/cvData';

function App() {
  return (
    <div>
      <CabeceraCV {...cabecera} />
      <Perfil resumen={resumen} />
    </div>
  );
}
