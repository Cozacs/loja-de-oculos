import './App.css';

import Header from './componentes/topo/Header.js';
import PrimeiraSecao from './componentes/pagina/PrimeiraSecao.js';
import SegundaSecao from './componentes/pagina/SegundaSecao.js';
import TerceiraSecao from './componentes/pagina/TerceiraSecao.js';
import Contato from './componentes/pagina/Contato.js';
import Rodape from './componentes/rodape/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <PrimeiraSecao />
      <SegundaSecao />
      <TerceiraSecao />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
