import styled from 'styled-components';

interface GitHubProfileStyledProps {
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

function GitHubProfileStyled({ usuario }: GitHubProfileStyledProps) {
  return (
    <Card>
      <Title>Perfil GitHub (Styled)</Title>
      <Avatar src={`https://github.com/${usuario}.png`} alt="Avatar" />
      <Username>@{usuario}</Username>
    </Card>
  );
}

export default GitHubProfileStyled;
