//! 로그인 시 이메일과 비밀번호의 유효성을 확인합니다.

function validEmail(email) {
  const regExEmail =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  return regExEmail.test(email);
}

function validPassword(password) {
  const regExPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}$/;
  return regExPassword.test(password);
}

export const validation = (email, password) => {
  return [validEmail(email), validPassword(password)];
};
