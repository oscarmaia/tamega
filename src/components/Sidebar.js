import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Sidebar() {
  return (
    <PageContainer>
      <SidebarContainer>
        <NavLink to={'/dashboard'}>dashboard</NavLink>
        <NavLink to={'/'}>home</NavLink>
      </SidebarContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  min-height: calc(100vh - 3rem);
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  a:active {
    color: green;
  }
`;
