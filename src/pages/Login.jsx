import React from 'react';
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
  return (
    <>
      <LoginBody>
        <LoginContainer>
          <LoginHeader>
            <Img logo alt="instagram-logo" src="image/logo.PNG" />
          </LoginHeader>
          <LoginForm>
            <Input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <Input type="password" placeholder="비밀번호" />
            <Button>로그인</Button>
          </LoginForm>
        </LoginContainer>
      </LoginBody>
    </>
  );
};

export default Login;
