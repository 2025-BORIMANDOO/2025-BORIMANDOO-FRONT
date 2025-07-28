import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage';
import KakaoRedirectPage from './pages/OAuth/KakaoRedirectPage';
import HomePage from './pages/Home/HomePage';

function App() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}/healthcheck`)
      .then(res => {
        if (res.ok) {
          console.log('서버 응답 OK (200)');
          return res.json();
        } else {
          console.error('서버 응답 오류:', res.status);
        }
      })
      .then(data => console.log('받은 데이터:', data))
      .catch(err => console.error('네트워크 에러:', err));
  }, [apiBaseUrl]);

return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/oauth/kakao" element={<KakaoRedirectPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/"
        element={
          <div className="bg-purple-500 text-white p-6 rounded-lg min-h-screen flex flex-col items-center justify-center font-suit">
            <h1 className="text-3xl font-extrabold mb-4">Tailwind CSS + SUIT 폰트 적용 성공!</h1>
            <p className="text-body1 font-regular mb-2">API Base URL:</p>
            <code className="bg-gray-800 p-2 rounded mb-6">{apiBaseUrl}</code>

            <div className="flex gap-4">
              <a
                href="/login"
                className="px-4 py-2 bg-white text-purple-500 font-bold rounded hover:bg-gray-200"
              >
                로그인 페이지
              </a>
              <a
                href="/home"
                className="px-4 py-2 bg-white text-purple-500 font-bold rounded hover:bg-gray-200"
              >
                홈 페이지
              </a>
            </div>
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);
}

export default App;
