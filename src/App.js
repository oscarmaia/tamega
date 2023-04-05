import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./resources/css/reset";
import SignIn from "./pages/SingIn";

const LoginLayout = () => (
  <div>
    <h1>Login Layout</h1>
    <Outlet />
  </div>
);

const AdminLayout = () => (
  <div>
    <Header></Header>
    <div style={{ display: "flex" }}>
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
