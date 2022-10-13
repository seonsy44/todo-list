import styled from "styled-components";
import { positionCenterY } from "../styles/mixins";
import { HiOutlineCheckCircle as Check } from "react-icons/hi";
import RawInput from "./RawInput";

const AuthInput = ({ value, onChange, name, type, placeholder, isValid }) => {
  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <InputContainter>
        <RawInput
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          paddingRight="35"
        />
        <IconCatinaer isValid={isValid}>
          <Check />
        </IconCatinaer>
      </InputContainter>
    </>
  );
};

export default AuthInput;

const Label = styled.label`
  color: ${({ theme }) => theme.mainColor};
  font-size: 20px;
`;

const InputContainter = styled.div`
  position: relative;
  width: 100%;
  margin-top: 8px;
`;

const IconCatinaer = styled.div`
  ${positionCenterY()};
  height: 40px;
  right: 10px;
  font-size: 20px;
  color: ${({ theme, isValid }) =>
    isValid ? theme.mainColor : theme.mediumGrayColor};

  transition: all 300ms;
`;
