import styled from "styled-components";
import { positionCenterY } from "../styles/mixins";
import RawInput from "./RawInput";

const TodoInput = ({
  value,
  onChange,
  name,
  placeholder,
  buttonText,
  underLine = false,
}) => {
  return (
    <InputContainter>
      <RawInput
        value={value}
        onChange={onChange}
        name={name}
        type="text"
        placeholder={placeholder}
        underLine={underLine}
        paddingRight="68"
      />
      <Button type="submit">{buttonText}</Button>
    </InputContainter>
  );
};

export default TodoInput;

const InputContainter = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;

const Button = styled.button`
  ${positionCenterY()}
  right: 10px;
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
