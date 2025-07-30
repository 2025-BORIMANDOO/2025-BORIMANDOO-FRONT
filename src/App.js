import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage.jsx';
import KakaoRedirectPage from './pages/OAuth/KakaoRedirectPage.jsx';
import HomePage from './pages/Farmer/Home/HomePage.jsx';
import History from './pages/Farmer/Home/History.jsx';
import OnboardingPage from './pages/Farmer/Onboarding/OnboardingPage.jsx';
import FarmerMyPage from './pages/Farmer/FarmerMyPage/FarmerMyPage.jsx';
import AnimalTypeSelectPage from './pages/Farmer/Home/FarmerRequest/AnimalTypeSelectPage.jsx';
import RoleSelectPage from './pages/Login/RoleSelectPage.jsx';
import VetOnboardingPage from './pages/Vet/OnBoarding/VetOnBoardingPage.jsx';
import VetHomePage from './pages/Vet/Home/VetHomePage.jsx';
import FarmerRequest from './pages/Farmer/Home/FarmerRequest/FarmerRequest.jsx';

import Layout from './components/common/Layout';
import VetMyPage from './pages/Vet/VetMyPage/VetMypage.jsx';
import HistoryDetail from './pages/Farmer/Home/HistoryDetail.jsx';
import Estimate from './pages/Farmer/Home/Estimate.jsx';

import EstimateConfirm from './pages/Farmer/Home/EstimateConfirm.jsx';
import EmergencyFilterPage from './pages/Vet/Home/VetRequest/EmergencyFilterPage.jsx';
import LocationFilterPage from './pages/Vet/Home/VetRequest/LocationFilterPage.jsx';

import VetRequestListPage from './pages/Vet/Home/VetRequest/VetRequestListPage.jsx';
import VetRequestDetail from './pages/Vet/Home/VetRequest/VetRequestDetail.jsx';
import VetEstimate from './pages/Vet/Home/VetRequest/VetEstimate.jsx';

import AcceptedList from './pages/Vet/Home/AcceptedList.jsx';
import AcceptedListDetail from './pages/Vet/Home/AcceptedListDetail.jsx';

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
        {/* 하단바 없는 페이지 */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login/roleselect" element={<RoleSelectPage />} />
        <Route path="/oauth/kakao" element={<KakaoRedirectPage />} />
        <Route path="/farmer/onboarding" element={<OnboardingPage />} />
        <Route path="/vet/onboarding" element={<VetOnboardingPage />} />
        <Route path="/farmer/home/farmerrequest" element={<FarmerRequest />} />
        <Route path="/farmer/select-animal" element={<AnimalTypeSelectPage />} />
        <Route path="/farmer/home/estimateconfirm" element={<EstimateConfirm />} />

        <Route path="/vet/home/vetrequest/emergency" element={<EmergencyFilterPage />} />
        <Route path="/vet/home/vetrequest/location" element={<LocationFilterPage />} />
        <Route path="/vet/request/:id/estimate" element={<VetEstimate />} />
        <Route path="/vet/accepted/:id" element={<AcceptedListDetail />} />

        {/* 하단바가 필요한 페이지 */}
        <Route element={<Layout />}>
          <Route path="/farmer/home" element={<HomePage />} />
          <Route path="/farmer/home/history" element={<History />} />
          <Route path="/farmer/home/history/:id" element={<HistoryDetail />} />
          <Route path="/farmer/farmermypage" element={<FarmerMyPage />} />
          <Route path="/farmer/home/estimate" element={<Estimate />} />
          
          <Route path="/vet/home" element={<VetHomePage />} />
          <Route path="/vet/vetmypage" element={<VetMyPage />} />
          <Route path="/vet/request/list" element={<VetRequestListPage />} />

          <Route path="/vet/accepted" element={<AcceptedList />} />
          <Route path="/vet/accepted/:id" element={<AcceptedListDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
