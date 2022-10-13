import styled, { css } from "styled-components";

const RawInput = ({
  value,
  onChange,
  name,
  type,
  placeholder,
  paddingRight,
  underLine = false,
}) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      id={name}
      autoComplete="off"
      paddingRight={paddingRight}
      underLine={underLine}
    />
  );
};

export default RawInput;

const InputBorder = css`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.mediumGrayColor};
  background-color: white;
  transition: all 400ms;

  &:focus {
    background-color: ${({ theme }) => theme.lightGrayColor};
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  padding-right: ${({ paddingRight }) => paddingRight + "px"};
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.mediumGrayColor};
  background-color: ${({ theme }) => theme.lightGrayColor};
  font-size: 18px;
  color: ${({ theme }) => theme.mainColor};

  &:focus {
    outline: none;
  }

  ${({ underLine }) => underLine && InputBorder}
`;
