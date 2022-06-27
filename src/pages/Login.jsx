import React, { useCallback, useRef, useState, useEffect } from 'react';
import { userInfo } from '../utils/userInfo';
import { validation } from '../utils/validation';
import {
  LoginBody,
  LoginContainer,
  LoginHeader,
  Img,
  LoginForm,
  Input,
  Button,
} from '../styles/Login.styled';

const Login = () => {
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkValidation, setCheckValidation] = useState(false);

  const emailRef = useRef('');
  const passwordRef = useRef('');

  //! 이메일
  const handleChangeEmail = useCallback((e) => {
    const [validEmail, validPassword] = validation(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (e.target.value === '') {
      setCheckEmail(true);
      setCheckValidation(false);
      return;
    }

    if (validEmail) {
      setCheckEmail(true);
      if (validPassword) {
        setCheckValidation(true);
        return;
      }
      return;
    }

    setCheckValidation(false);
    setCheckEmail(false);
  }, []);

  //! 비밀번호
  const handleChangePassword = useCallback((e) => {
    const [validEmail, validPassword] = validation(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (e.target.value === '') {
      setCheckPassword(true);
      setCheckValidation(false);
      return;
    }

    if (validPassword) {
      setCheckPassword(true);
      if (validEmail) {
        setCheckValidation(true);
        return;
      }
      return;
    }

    setCheckValidation(false);
    setCheckPassword(false);
  }, []);

  //! 인풋값 제출
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (
      emailRef.current.value !== userInfo.email ||
      passwordRef.current.value !== userInfo.password
    ) {
      alert('입력한 정보를 다시 확인해주세요!');
      return;
    }
    localStorage.setItem('email', emailRef.current.value);
    localStorage.setItem('password', passwordRef.current.value);

    location.href = '/main';
  }, []);

  useEffect(() => {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      location.href = '/main';
    }
  }, []);

  return (
    <LoginBody>
      <LoginContainer>
        <LoginHeader>
          <Img logo alt="instagram-logo" src="image/logo.PNG" />
        </LoginHeader>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            ref={emailRef}
            onChange={handleChangeEmail}
            isValidated={checkEmail}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            ref={passwordRef}
            onChange={handleChangePassword}
            isValidated={checkPassword}
            required
          />
          <Button isValidated={checkValidation} type="submit">
            로그인
          </Button>
        </LoginForm>
      </LoginContainer>
    </LoginBody>
  );
};

export default Login;
