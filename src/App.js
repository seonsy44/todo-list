import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import Todo from "./routes/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
