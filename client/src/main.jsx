import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./views/App";
import AddPokemon from "./views/pages/AddPokemon";
import LoginPage from "./views/pages/Login";
import AuthPage from "./views/pages/AuthPage";
import { AuthProvider } from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "addPokemon",
    element: <AddPokemon />,
  },
  {
    path: "login",
    element: <AuthPage site={'login'} />,
  },
  {
    path: "signup",
    element: <AuthPage site={'signup'} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </StrictMode>
);
