import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HooksApp from "./HooksApp.jsx";
import SimpleForm from "./02-useEffect/SimpleForm.jsx";
import FormCustomHook from "./02-useEffect/FormWithCustomHook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormCustomHook />
  </StrictMode>
);
