import { Button } from "@mui/material";
import styled from "styled-components";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <HeaderContainer>
      <Button variant="contained">Toggle Sidebar</Button>
      <Sidebar ref={Sidebar.ref}></Sidebar>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: auto;
  height: 3rem;
  background-color: grey;
  button {
    margin-left: 150px;
  }
`;
