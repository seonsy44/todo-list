import styled from "styled-components";
import { AlertModalProvider } from "../contexts/alertModalContext";
import { flexBox } from "../styles/mixins";

const Container = ({ children }) => {
  return (
    <ContainerOuter>
      <ContainerInner>
        <AlertModalProvider>{children}</AlertModalProvider>
      </ContainerInner>
    </ContainerOuter>
  );
};

export default Container;

const ContainerOuter = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexBox()};
`;

const ContainerInner = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  padding: 30px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.mediumGrayColor};
    border-radius: 10px;
  }
`;
