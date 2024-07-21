import Container from "../../../atoms/Container";
import { Outlet } from "react-router-dom";
import RTQueryClient from "../../RtqWrapper";

export default function MainLayout() {
  return (
    <RTQueryClient>
      <Container>
        <Outlet />
      </Container>
    </RTQueryClient>
  );
}
