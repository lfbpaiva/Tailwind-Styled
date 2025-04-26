interface GitHubProfileTailwindProps {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
  usuario: string;
}

function GitHubProfileTailwind({ avatar_url, name, bio, public_repos, html_url, usuario }: GitHubProfileTailwindProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md text-white text-center">
      <h1 className="text-3xl font-bold mb-6">{name || `@${usuario}`}</h1>
      <div className="flex flex-col items-center">
        <img className="w-32 h-32 rounded-full mb-4" src={avatar_url} alt="Foto do usuário" />
        <p className="text-lg mb-2">@{usuario}</p>
        <p className="mb-2">{bio}</p>
        <p className="mb-4">Repositórios públicos: {public_repos}</p>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Perfil no GitHub
        </a>
      </div>
    </div>
  );
}

export default GitHubProfileTailwind;
