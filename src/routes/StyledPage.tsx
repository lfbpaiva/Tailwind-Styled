import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GitHubProfileStyled from '../components/GitHubProfileStyled';

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
}

function StyledPage() {
  const { usuario } = useParams<{ usuario: string }>();
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchGitHubUser() {
      try {
        const response = await fetch(`https://api.github.com/users/${usuario}`);
        if (!response.ok) {
          throw new Error('Usuário não encontrado');
        }
        const data = await response.json();
        setUserData(data);
        setError('');
      } catch (err) {
        setError('Usuário não encontrado');
        setUserData(null);
      }
    }

    if (usuario) {
      fetchGitHubUser();
    }
  }, [usuario]);

  return (
    <div className="page-container">
      <div className="flex flex-col items-center text-center">
        {error ? (
          <p className="text-red-500 text-xl">{error}</p>
        ) : userData ? (
          <GitHubProfileStyled
            avatar_url={userData.avatar_url}
            name={userData.name}
            bio={userData.bio}
            public_repos={userData.public_repos}
            html_url={userData.html_url}
            usuario={usuario!}
          />
        ) : (
          <p className="text-white">Carregando...</p>
        )}
        <Link
          to="/"
          className="mt-6 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}

export default StyledPage;
