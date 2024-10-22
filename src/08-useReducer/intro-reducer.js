// Estado inicial con una tarea en la lista
const initialState = [
  {
    id: 1,
    todo: "Recolectar piedra",
    done: false,
  },
];

// Función reductora que maneja las acciones sobre el estado de las tareas
const todoReducer = (state = initialState, action) => {
  // Si la acción es de tipo "add", agrega una nueva tarea al estado
  if (action?.type === "add") {
    return [...state, action.payload];
  }

  // Si no se reconoce la acción, retorna el estado actual sin cambios
  return state;
};

// Nueva tarea a agregar
const newTodo = {
  id: 2,
  todo: "Recolectar madera",
  done: false,
};

// Acción que describe la adición de una nueva tarea
const addTodoAction = {
  type: "add",
  payload: newTodo,
};

// Inicializa el estado de las tareas usando el reductor sin pasar ninguna acción
let todos = todoReducer();

// Agrega la nueva tarea al estado de las tareas
todos = todoReducer(todos, addTodoAction);

// Imprime el estado actualizado de las tareas en la consola
console.log(todos);
