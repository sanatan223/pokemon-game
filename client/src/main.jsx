import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./views/App";
import AddPokemon from "./views/pages/AddPokemon";
import AuthPage from "./views/pages/AuthPage";
import { AuthProvider } from "./context/UserContext";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App />, },
      { path: "addPokemon", element: <AddPokemon />, },
      { path: "login", element: <AuthPage site={'login'} />, },
      { path: "signup", element: <AuthPage site={'signup'} />, },
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
