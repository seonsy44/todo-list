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
    <TodoContainer onClick={handleCompleteClick}>
      <SubContainer>
        <Outlined isCompleted={isCompleted}>
          <BsCheckLg />
        </Outlined>
        <Text isCompleted={isCompleted}>{todo}</Text>
      </SubContainer>

      <SubContainer>
        <NotOutlined onClick={handleEditClick}>
          <AiFillEdit />
        </NotOutlined>
        <NotOutlined onClick={handleDeleteClick}>
          <AiFillDelete />
        </NotOutlined>
      </SubContainer>
    </TodoContainer>
  );
};

export default TodoItem;

const TodoContainer = styled.div`
  ${flexBox("row", "space-between", "center")};
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 1px;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.tPointColor};
  }
`;

const SubContainer = styled.div`
  ${flexBox("row", "flex-start", "center")};
`;

const Text = styled.span`
  font-size: 20px;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.darkGrayColor : theme.mainColor};
  text-decoration: ${({ isCompleted }) => isCompleted && "line-through"};
`;

const IconContainer = css`
  ${flexBox()};
  margin-right: 7px;
  width: 25px;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.pointColor : theme.darkGrayColor};
  transition: all 200ms;
`;

const Outlined = styled.div`
  ${IconContainer}
  width: 18px;
  height: 18px;
  margin-left: 7px;
  border: 1px solid
    ${({ theme, isCompleted }) =>
      isCompleted ? theme.pointColor : theme.darkGrayColor};
  border-radius: 4px 4px 0 4px;
  font-size: 10px;
`;

const NotOutlined = styled.div`
  ${IconContainer}
  font-size: 24px;
  &:hover {
    color: ${({ theme }) => theme.pointColor};
  }
`;
