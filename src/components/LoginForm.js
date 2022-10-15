import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthLogin from "../hooks/useAuthLogin";
import AuthForm from "./AuthForm";
import Button from "./Button";
import AuthInput from "./AuthInput";

const LoginForm = ({ setIsLoginPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = email.includes("@");
  const isPwValid = password.length >= 8;
  const isFormValid = isEmailValid && isPwValid;

  const authLogin = useAuthLogin();
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePwChange = (e) => setPassword(e.target.value);
  const handleRegisterClick = () => setIsLoginPage(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const success = await authLogin({ email, password });
    if (success) navigate("/todo");
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleFormSubmit}
      navigateText="회원가입"
      onClickNavigate={handleRegisterClick}
    >
      <AuthInput
        value={email}
        onChange={handleEmailChange}
        name="Email"
        type="text"
        placeholder="이메일을 입력해주세요"
        isValid={isEmailValid}
      />

      <AuthInput
        value={password}
        onChange={handlePwChange}
        name="Password"
        type="password"
        placeholder="8자리 이상의 비밀번호를 입력해주세요"
        isValid={isPwValid}
      />

      <Button type="submit" isValid={isFormValid} large>
        로그인
      </Button>
    </AuthForm>
  );
};

export default LoginForm;
