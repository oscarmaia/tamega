import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Sidebar({ children }) {
  return (
    <PageContainer>
      <SidebarContainer>Sidebar</SidebarContainer>
      {children}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  width: 15rem;
  min-height: calc(100vh - 3rem);
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
`;
