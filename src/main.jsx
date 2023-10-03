import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/MainRouter.jsx";
import Container from "./Share/Container.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
