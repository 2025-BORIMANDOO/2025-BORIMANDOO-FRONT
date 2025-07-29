import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const userId = params.get('userId');
    const name = decodeURIComponent(params.get('name') || '');
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (userId && accessToken && refreshToken) {
      // 로컬스토리지에 사용자 정보 저장
      localStorage.setItem('userId', userId);
      localStorage.setItem('name', name);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // 로그인 후 페이지로 이동 (/home)
      navigate('/home');
    } else {
      // 누락된 값이 있으면 로그인 페이지로 이동s
      navigate('/login');
    }
  }, [navigate]);

  return <div>로그인 처리 중입니다...</div>;
};

export default KakaoRedirectPage;
