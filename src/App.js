import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import Todo from "./routes/todo";
import { TodoProvider } from "./contexts/todoContext";
import { AlertModalProvider } from "./contexts/alertModalContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const token = localStorage.getItem("token");

  const RootRoute = (
    <ProtectedRoute element={<Root />} redirect="/todo" isPermitted={!token} />
  );

  const TodoRoute = (
    <ProtectedRoute
      element={
        <TodoProvider>
          <Todo />
        </TodoProvider>
      }
      redirect="/"
      isPermitted={!!token}
    />
  );

  return (
    <Router>
      <AlertModalProvider>
        <Routes>
          <Route path="/" element={RootRoute} />
          <Route path="/todo" element={TodoRoute} />
        </Routes>
      </AlertModalProvider>
    </Router>
  );
}

export default App;
