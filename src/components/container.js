import styled from "styled-components";
import { flexBox } from "../styles/mixins";

const Container = ({ children }) => {
  return (
    <ContainerOuter>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
};

export default Container;

const ContainerOuter = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexBox()}
`;

const ContainerInner = styled.div`
  width: 800px;
  height: 600px;
  padding: 30px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;
