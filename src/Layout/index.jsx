import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/index";
import { Container, Wrapper } from "./styled";

export default function Layout() {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Outlet />
      </Wrapper>
    </Container>
  );
}
