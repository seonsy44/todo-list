import styled, { css } from "styled-components";

const Button = ({ children, type, isValid, large, onClick }) => {
  return (
    <StyledButton
      type={type}
      isValid={isValid}
      disabled={!isValid}
      large={large}
      onClick={onClick}
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

const StyledButton = styled.button`
  color: white;
  background-color: ${({ isValid, theme }) =>
    isValid ? theme.mainColor : theme.darkGrayColor};
  border: none;
  cursor: ${({ isValid }) => (isValid ? "pointer" : "default")};
  ${({ large }) => large && ButtonLarge}
  transition: all 300ms
`;
