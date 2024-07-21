import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/organisms/Layouts/MainLayout";
import ErrorPage from "../../components/organisms/ErrorPage";
import WeatherPage from "../../components/organisms/WeatherPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <WeatherPage /> },
          /* the rest of the routes */
        ],
      },
    ],
  },
]);
