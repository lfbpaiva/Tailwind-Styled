import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import TailwindPage from './routes/TailwindPage';
import StyledPage from './routes/StyledPage';

interface HomeProps {
  usuario: string;
  setUsuario: React.Dispatch<React.SetStateAction<string>>;
}

function Home({ usuario, setUsuario }: HomeProps) {
  return (
    <div className="page-container">
      <div style={{ textAlign: 'center' }}>
        <h2>Buscar Perfil GitHub</h2>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={{ padding: '0.5rem', marginTop: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', border: 'none' }}
        />
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to={`/Tailwind/${usuario}`}>
            <button>Rota em Tailwind</button>
          </Link>
          <Link to={`/Styled/${usuario}`}>
            <button>Rota em Styled-Components</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [usuario, setUsuario] = useState<string>('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home usuario={usuario} setUsuario={setUsuario} />} />
        <Route path="/Tailwind/:usuario" element={<TailwindPage usuario={usuario} />} />
        <Route path="/Styled/:usuario" element={<StyledPage usuario={usuario} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
