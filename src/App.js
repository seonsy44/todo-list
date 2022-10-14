import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import Todo from "./routes/todo";
import { TodoProvider } from "./contexts/todoContext";

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
  return <RouterProvider router={router} />;
}

export default App;
