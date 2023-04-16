import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function Home() {
  return (
    <CenteredContainer>
      <h1>HOME PAGE</h1>
      <h2>APRESENTAÇÃO SOBRE O SITE</h2>
      <Link to="/sign-in"> ir para login page</Link>
      <Link to="/sign-up"> cadastre-se </Link>
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  a:hover {
    background-color: red;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
`;
