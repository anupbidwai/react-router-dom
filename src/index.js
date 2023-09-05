import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "./routes";
import AuthProvider from "./utility/auth";
import "./styles.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>
);
