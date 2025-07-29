import React from 'react';

const LoginPage = () => {
  const handleKakaoLogin = () => {
    window.location.href = 'https://medimo.site/oauth2/authorization/kakao';
  };

  return (
    <div>
      <h2>로그인</h2>
      <button onClick={handleKakaoLogin}>카카오로 로그인하기</button>
    </div>
  );
};

export default LoginPage;
