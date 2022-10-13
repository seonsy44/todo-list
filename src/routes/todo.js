import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import useCreateTodo from "../hooks/useCreateTodo";
import useGetTodos from "../hooks/useGetTodos";
import { flexBox } from "../styles/mixins";

const Todo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const getTodos = useGetTodos();
  const createTodo = useCreateTodo();

  const handleValueChange = (e) => setTodoValue(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!todoValue.length) return;

    const newTodo = await createTodo({ todo: todoValue });
    if (newTodo) {
      setTodoValue("");
      setTodos([...todos, newTodo]);
    }
  };

  const handleTodoUpdate = (edited) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === edited.id) return edited;
      return todo;
    });
    setTodos(newTodos);
  };

  const handleTodoDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
    else {
      fetchTodos();
    }
  }, []);

  return (
    <Container>
      <TodoContainer>
        <Title>To Do</Title>
        <form onSubmit={handleFormSubmit}>
          <TodoInput
            value={todoValue}
            onChange={handleValueChange}
            name="todo"
            buttonText="등록"
          />
        </form>

        {!todos.length && (
          <NoTodo>{loading ? "Loading.." : "No TODO.."}</NoTodo>
        )}

        <TodoList>
          {todos.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              handleTodoUpdate={handleTodoUpdate}
              handleTodoDelete={handleTodoDelete}
            />
          ))}
        </TodoList>
      </TodoContainer>
    </Container>
  );
};

export default Todo;

const TodoContainer = styled.div`
  width: 70%;
  transform: translateX(15%);
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.mainColor};
`;

const TodoList = styled.div`
  margin-top: 20px;
`;

const NoTodo = styled.div`
  ${flexBox()};
  width: 100%;
  height: 350px;
  font-size: 30px;
  color: ${({ theme }) => theme.darkGrayColor};
`;
