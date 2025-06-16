import { datosPersonales } from './data';

function App() {
  return (
    <div>
      <h1>{datosPersonales.nombre}</h1>
      <h2>{datosPersonales.cargo}</h2>
      <p>{datosPersonales.ciudad} | {datosPersonales.contacto}</p>
    </div>
  );
}

export default App;
