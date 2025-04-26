import React from 'react';

interface GitHubProfileTailwindProps {
  usuario: string;
}

function GitHubProfileTailwind({ usuario }: GitHubProfileTailwindProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Perfil GitHub (Tailwind)</h1>
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={`https://github.com/${usuario}.png`}
          alt="Foto do usuário"
        />
        <p className="text-lg">@{usuario}</p>
      </div>
    </div>
  );
}

export default GitHubProfileTailwind;
