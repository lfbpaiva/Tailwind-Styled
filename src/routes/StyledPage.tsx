import GitHubProfileStyled from '../components/GitHubProfileStyled';

interface StyledPageProps {
  usuario: string;
}

function StyledPage({ usuario }: StyledPageProps) {
  return (
    <div className="page-container">
      <GitHubProfileStyled usuario={usuario} />
    </div>
  );
}

export default StyledPage;
