import styled from 'styled-components';

interface GitHubProfileStyledProps {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
  usuario: string;
}

const Card = styled.div`
  background-color: #2d2d2d;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.5);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Username = styled.p`
  font-size: 1.2rem;
  color: #bbb;
`;

const Bio = styled.p`
  margin-top: 1rem;
  color: #ccc;
`;

const RepoCount = styled.p`
  margin-top: 0.5rem;
  color: #ccc;
`;

const ProfileLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
`;

function GitHubProfileStyled({ avatar_url, name, bio, public_repos, html_url, usuario }: GitHubProfileStyledProps) {
  return (
    <Card>
      <Title>{name || `@${usuario}`}</Title>
      <Avatar src={avatar_url} alt="Avatar" />
      <Username>@{usuario}</Username>
      <Bio>{bio}</Bio>
      <RepoCount>Repositórios públicos: {public_repos}</RepoCount>
      <ProfileLink href={html_url} target="_blank" rel="noopener noreferrer">
        Ver Perfil no GitHub
      </ProfileLink>
    </Card>
  );
}

export default GitHubProfileStyled;
