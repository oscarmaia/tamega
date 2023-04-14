import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function AdminLayout() {
  return (
    <>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <Sidebar></Sidebar>
        <Outlet />
      </div>
    </>
  );
}
