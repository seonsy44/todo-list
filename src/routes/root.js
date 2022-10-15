import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Root = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/todo");
  }, []);

  return (
    <Container>
      {isLoginPage ? (
        <LoginForm setIsLoginPage={setIsLoginPage} />
      ) : (
        <RegisterForm setIsLoginPage={setIsLoginPage} />
      )}
    </Container>
  );
};

export default Root;
