import styled from 'styled-components';

export const LoginBody = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

export const LoginContainer = styled.div`
  border: 1px solid #dbdbdb;
  height: 396px;
  width: 350px;
  margin: 35px 0 10px 0;
  padding: 10px 0 10px 0;
  min-height: auto;
  min-width: auto;
  background-color: #ffffff;
`;

export const LoginHeader = styled.div`
  width: 100%;
  margin: 1.7rem 0;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img.attrs({})`
  width: 55%;
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  height: 2.5rem;
  background-color: #fafafa;
  border: 1px solid;
  border-radius: 3px;
  border-color: ${(props) => (props.isValidated ? '#dbdbdb' : '#ff3b23')};
  font-size: 12px;
  padding: 9px 0 7px 8px;
  margin: 3px 0;
  color: #262626;
  text-decoration: none solid #929292;
`;

export const Button = styled.button`
  width: 80%;
  height: 2rem;
  background-color: #bfdffd;
  color: #ffffff;
  margin: 10px 0 0 0;
  border-radius: 3px;
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) => (props.isValidated ? '#0095f6' : '#bfdffd')};
`;
