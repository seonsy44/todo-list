import styled, { css } from "styled-components";
import { flexBox } from "../styles/mixins";
import TodoInput from "./TodoInput";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { useContext, useState } from "react";
import useUpdateTodo from "../hooks/useUpdateTodo";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { TodoContext } from "../contexts/todoContext";

const TodoItem = ({ todoItem: { id, todo, isCompleted } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const todos = useContext(TodoContext);
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const handleValueChange = (e) => setEditValue(e.target.value);

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditValue(todo);
    setIsEditing(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedTodo = await updateTodo({ id, todo: editValue, isCompleted });
    todos.updateOne(updatedTodo);
    handleCancelEdit();
  };

  const handleCompleteClick = async () => {
    const updatedTodo = await updateTodo({
      id,
      todo,
      isCompleted: !isCompleted,
    });
    todos.updateOne(updatedTodo);
  };

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    const success = await deleteTodo({ id });
    if (success) todos.deleteOne(id);
  };

  if (isEditing)
    return (
      <form onSubmit={handleFormSubmit}>
        <TodoInput
          value={editValue}
          onChange={handleValueChange}
          name="editTodo"
          buttonText="수정"
          underLine
          cancelBtn
          onClickCancel={handleCancelEdit}
        />
      </form>
    );

  return (
    <TodoContainer>
      <Outlined isCompleted={isCompleted} onClick={handleCompleteClick}>
        <BsCheckLg />
      </Outlined>
      <Text isCompleted={isCompleted}>{todo}</Text>
      <NotOutlined onClick={handleEditClick}>
        <AiFillEdit />
      </NotOutlined>
      <NotOutlined onClick={handleDeleteClick}>
        <AiFillDelete />
      </NotOutlined>
    </TodoContainer>
  );
};

export default TodoItem;

const TodoContainer = styled.div`
  ${flexBox("row", "space-between", "flex-start")};
  width: 100%;
  padding: 13.5px 10px;
  margin-top: 1px;
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.tPointColor};
  }
`;

const Text = styled.span`
  display: block;
  width: 400px;
  padding: 0 10px;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 18px;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.darkGrayColor : theme.mainColor};
  text-decoration: ${({ isCompleted }) => isCompleted && "line-through"};
  z-index: 1;

  ${TodoContainer}:hover & {
    overflow: visible;
    white-space: normal;
    z-index: 2;
    background-color: ${({ theme }) => theme.white};
  }
`;

const IconContainer = css`
  ${flexBox()};
  width: 25px;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.pointColor : theme.darkGrayColor};
  cursor: pointer;
  transition: all 200ms;
`;

const Outlined = styled.div`
  ${IconContainer}
  width: 18px;
  height: 18px;
  margin-top: 1px;
  border: 1px solid
    ${({ theme, isCompleted }) =>
      isCompleted ? theme.pointColor : theme.darkGrayColor};
  border-radius: 4px 4px 0 4px;
  font-size: 10px;
`;

const NotOutlined = styled.div`
  ${IconContainer}
  font-size: 23px;
  &:hover {
    color: ${({ theme }) => theme.pointColor};
  }
`;
