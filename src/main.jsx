import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HooksApp from "./HooksApp.jsx";
import SimpleForm from "./02-useEffect/SimpleForm.jsx";
import FormCustomHook from "./02-useEffect/FormWithCustomHook.jsx";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks.jsx";
import FocusScreen from "./04-useRef/FocusScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>
);
