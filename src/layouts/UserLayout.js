import { Outlet } from "react-router-dom";
import styled from "styled-components";
export default function UserLayout() {
  return (
    <PageContainer>
      <LeftContainer>
        <h1>PAGINA DE APRESENTAÇÃO DO SITE</h1>
      </LeftContainer>
      <RightContainer>
        <Outlet />
      </RightContainer>
    </PageContainer>
  );
}

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  background-color: lightblue;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: lightcyan;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
