import styled from "styled-components";
import { positionCenterY } from "../styles/mixins";
import { HiOutlineCheckCircle as Check } from "react-icons/hi";

const TextInput = ({ value, onChange, name, type, placeholder, isValid }) => {
  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <InputContainter>
        <Input
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          id={name}
        />
        <CheckIcon isValid={isValid} />
      </InputContainter>
    </>
  );
};

export default TextInput;

const Label = styled.label`
  color: ${({ theme }) => theme.mainColor};
  font-size: 20px;
`;

const InputContainter = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.mediumGrayColor};
  background-color: ${({ theme }) => theme.lightGrayColor};
  font-size: 18px;
  color: ${({ theme }) => theme.mainColor};

  &:focus {
    outline: none;
  }
`;

const CheckIcon = styled(Check)`
  ${positionCenterY()}
  transform: translateY(-60%);
  right: 10px;
  font-size: 20px;
  color: ${({ theme, isValid }) =>
    isValid ? theme.mainColor : theme.mediumGrayColor};

  transition: all 300ms;
`;
