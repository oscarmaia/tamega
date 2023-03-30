import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

export default function Header() {
  function handleSidebarToggle() {
    console.log("toggle");
  }
  return <HeaderContainer>HEADER</HeaderContainer>;
}

const HeaderContainer = styled.div`
  width: auto;
  height: 3rem;
  background-color: grey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
