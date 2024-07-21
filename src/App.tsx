//import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router/index.router";

export default function App() {
  return <RouterProvider router={router} />;
}
