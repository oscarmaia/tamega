import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarRef]);
  
  return (
    <SidebarContainer ref={sidebarRef}>
      <h2>Sidebar Content</h2>
      <p>This is the content that will appear in the sidebar.</p>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
