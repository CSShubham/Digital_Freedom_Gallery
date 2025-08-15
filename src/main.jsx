import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AppDataProvider} from "./contexts/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppDataProvider>
  </StrictMode>
);