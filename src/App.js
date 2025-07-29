import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage.jsx';
import KakaoRedirectPage from './pages/OAuth/KakaoRedirectPage.jsx';
import HomePage from './pages/Farmer/Home/HomePage.jsx';
import OnboardingPage from './pages/Farmer/Onboarding/OnboardingPage.jsx';
import FarmerMyPage from './pages/Farmer/FarmerMyPage/FarmerMyPage.jsx';
import AnimalTypeSelectPage from './pages/Farmer/Home/FarmerRequest/AnimalTypeSelectPage.jsx';
import RoleSelectPage from './pages/Login/RoleSelectPage.jsx';
import VetOnboardingPage from './pages/Vet/OnBoarding/VetOnBoardingPage.jsx';


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
        <Route path="/" element={<LoginPage />} />
        <Route path="/login/roleselect" element={<RoleSelectPage />} />
        <Route path="/oauth/kakao" element={<KakaoRedirectPage />} />
        <Route path="/farmer/onboarding" element={<OnboardingPage />} />
        <Route path="/farmer/home" element={<HomePage />} />
        <Route path="/farmer/farmermypage" element={<FarmerMyPage />} />
        <Route path="/farmer/home/farmerrequest" element={<AnimalTypeSelectPage />} />
        <Route path="/vet/onboarding" element={<VetOnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
