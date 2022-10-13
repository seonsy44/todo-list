import styled from "styled-components";
import { flexBox, positionCenterX } from "../styles/mixins";

const AuthForm = ({
  children,
  title,
  onSubmit,
  navigateText,
  onClickNavigate,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Title>{title}</Title>
      {children}
      <NavigateText onClick={onClickNavigate}>{navigateText}</NavigateText>
    </Form>
  );
};

export default AuthForm;

const Form = styled.form`
  height: 90%;
  width: 400px;
  ${flexBox("column", "center", "flex-start")};
  ${positionCenterX()};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.mainColor};
`;

const NavigateText = styled.span`
  color: ${({ theme }) => theme.mainColor};
  font-size: 17px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;
