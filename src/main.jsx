import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HooksApp from "./HooksApp.jsx";
import SimpleForm from "./02-useEffect/SimpleForm.jsx";
import FormCustomHook from "./02-useEffect/FormWithCustomHook.jsx";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks.jsx";
import FocusScreen from "./04-useRef/FocusScreen.jsx";
import Memorize from "./05-memos/Memorize.jsx";
import CallbackHook from "./05-memos/CallbackHook.jsx";
import { Padre } from "./07-tarea-memo/Padre.jsx";
import "./08-useReducer/intro-reducer.js";
import TodoApp from "./08-useReducer/TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
