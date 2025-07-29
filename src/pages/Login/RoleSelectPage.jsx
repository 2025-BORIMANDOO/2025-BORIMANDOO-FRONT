// src/pages/Auth/RoleSelectPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelectPage() {
  const navigate = useNavigate();

  return (
    <div className="relative max-w-mobile mx-auto min-h-screen bg-white font-suit text-greyscale-black overflow-hidden">
      {/* 파란 배경 SVG 이미지 */}
      <img
        src="/icons/blue-circle.svg"
        alt="헤더 배경"
        className="absolute top-0 left-0 w-full h-[264px] object-cover z-0"
      />

      {/* 콘텐츠 컨테이너 */}
      <div className="relative z-10 px-screenMargin">
        {/* 로고 */}
        <img
          src="/icons/logo-medimo-white.svg"
          alt="medimo"
          className="absolute top-[121px] left-[20px] w-[120px]"
        />

        {/* 설명 텍스트 */}
        <p className="absolute top-[169px] left-[20px] text-body1 text-white leading-[21px]">
          메디모는 대동물 수의사와<br />
          아픈 동물들을 연결합니다.
        </p>

        {/* 선택 안내 문구 */}
        <div className="pt-[312px] text-center">
          <p className="text-body1 mb-6 leading-[21px]">
            안녕하세요:)<br />
            어떤 서비스가 필요해 찾아오셨나요?
          </p>

          {/* 버튼: 의사가 필요해요 */}
          <button
            onClick={() => navigate('/farmer/onboarding')}
            className="w-full bg-primary-blue text-white rounded-lg py-4 mb-4"
          >
            <p className="text-label1 font-bold mb-[2px]">의사가 필요해요</p>
            <p className="text-caption2 text-white/90">
              낙농가, 축산업자 등 자신의 가축 상태를<br />
              알고 싶은 사람들
            </p>
          </button>

          {/* 버튼: 환자가 필요해요 */}
          <button
            onClick={() => navigate('/vet/onboarding')}
            className="w-full bg-primary-darkBlue text-white rounded-lg py-4"
          >
            <p className="text-label1 font-bold mb-[2px]">환자가 필요해요</p>
            <p className="text-caption2 text-white/90">
              가축의 상태를 진단하고 치료할 수 있는 수의사
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
