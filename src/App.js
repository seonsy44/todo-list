import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import Todo from "./routes/todo";
import { TodoProvider } from "./contexts/todoContext";
import { AlertModalProvider } from "./contexts/alertModalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/todo",
    element: (
      <TodoProvider>
        <Todo />
      </TodoProvider>
    ),
  },
]);

function App() {
  return (
    <AlertModalProvider>
      <RouterProvider router={router} />
    </AlertModalProvider>
  );
}

export default App;
