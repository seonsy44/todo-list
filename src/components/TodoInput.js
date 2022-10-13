import styled, { css } from "styled-components";
import { positionCenterY } from "../styles/mixins";
import Button from "./Button";
import RawInput from "./RawInput";

const TodoInput = ({
  value,
  onChange,
  name,
  placeholder,
  buttonText,
  underLine = false,
  cancelBtn = false,
  onClickCancel,
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
        paddingRight={cancelBtn ? "122" : "68"}
      />
      {cancelBtn && (
        <Button
          type="button"
          isValid
          onClick={onClickCancel}
          style={CancelButton}
        >
          닫기
        </Button>
      )}
      <Button type="submit" isValid style={EditButton}>
        {buttonText}
      </Button>
    </InputContainter>
  );
};

export default TodoInput;

const InputContainter = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;

const EditButton = css`
  ${positionCenterY()};
  right: 10px;
`;

const CancelButton = css`
  ${positionCenterY()};
  right: 65px;
  background-color: ${({ theme }) => theme.darkGrayColor};
`;
