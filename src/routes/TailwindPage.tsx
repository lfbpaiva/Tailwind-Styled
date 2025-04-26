import GitHubProfileTailwind from '../components/GitHubProfileTailwind';

interface TailwindPageProps {
  usuario: string;
}

function TailwindPage({ usuario }: TailwindPageProps) {
  return (
    <div className="page-container">
      <GitHubProfileTailwind usuario={usuario} />
    </div>
  );
}

export default TailwindPage;
