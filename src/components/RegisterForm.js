import { useState } from "react";
import useAuthRegister from "../hooks/useAuthRegister";
import AuthForm from "./AuthForm";
import Button from "./Button";
import TextInput from "./TextInput";

const RegisterForm = ({ setIsLogining }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = email.includes("@");
  const isPwValid = password.length >= 8;
  const isConfirmPwValid = isPwValid && password === confirmPassword;
  const isFormValid = isEmailValid && isConfirmPwValid;

  const authRegister = useAuthRegister();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePwChange = (e) => setPassword(e.target.value);
  const handleConfirmPwChange = (e) => setConfirmPassword(e.target.value);
  const handleLoginClick = () => setIsLogining(true);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const success = await authRegister({ email, password });
    if (success) setIsLogining(true);
  };

  return (
    <AuthForm
      title="Register"
      onSubmit={handleFormSubmit}
      navigateText="로그인"
      onClickNavigate={handleLoginClick}
    >
      <TextInput
        value={email}
        onChange={handleEmailChange}
        name="Email"
        type="text"
        placeholder="이메일을 입력해주세요"
        isValid={isEmailValid}
      />

      <TextInput
        value={password}
        onChange={handlePwChange}
        name="Password"
        type="password"
        placeholder="8자리 이상의 비밀번호를 입력해주세요"
        isValid={isPwValid}
      />

      <TextInput
        value={confirmPassword}
        onChange={handleConfirmPwChange}
        name="Confirm"
        type="password"
        placeholder="비밀번호를 한 번 더 입력해주세요"
        isValid={isConfirmPwValid}
      />

      <Button type="submit" isValid={isFormValid} large>
        회원가입
      </Button>
    </AuthForm>
  );
};

export default RegisterForm;
