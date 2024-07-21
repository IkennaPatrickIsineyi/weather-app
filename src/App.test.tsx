import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react";

test("renders index page", async () => {
  await act(async () => render(<App />));
  const PageHeadingElement = screen.getByText(/Welcome to the weather app/i);
  expect(PageHeadingElement).toBeInTheDocument();
});
