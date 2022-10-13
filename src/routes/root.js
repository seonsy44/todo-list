import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Root = () => {
  const [isLogining, setIsLogining] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/todo");
  }, []);

  return (
    <Container>
      {isLogining ? (
        <LoginForm setIsLogining={setIsLogining} />
      ) : (
        <RegisterForm setIsLogining={setIsLogining} />
      )}
    </Container>
  );
};

export default Root;
