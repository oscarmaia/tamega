import styled from "styled-components";
import { Outlet } from "react-router-dom";
export default function LandPageLayout() {
  return (
    <CenteredContainer>
      <Outlet />
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
