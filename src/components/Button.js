import styled, { css } from "styled-components";

const Button = ({ children, type, isValid, large, onClick, style }) => {
  return (
    <StyledButton
      type={type}
      isValid={isValid}
      disabled={!isValid}
      large={large}
      onClick={onClick}
      customStyle={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const ButtonLarge = css`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
`;

const ButtonSmall = css`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
  font-size: 14px;
`;

const StyledButton = styled.button`
  background-color: ${({ isValid, theme }) =>
    isValid ? theme.mainColor : theme.darkGrayColor};
  border: none;
  cursor: ${({ isValid }) => (isValid ? "pointer" : "default")};
  color: white;
  ${({ large }) => (large ? ButtonLarge : ButtonSmall)};
  transition: all 300ms;
  ${({ customStyle }) => customStyle}
`;
