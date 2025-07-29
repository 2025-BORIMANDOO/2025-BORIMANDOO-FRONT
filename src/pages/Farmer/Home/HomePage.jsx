import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-mobile mx-auto min-h-screen bg-white px-screenMargin pt-[60px] pb-[88px] font-suit text-greyscale-black">
      {/* 상단바 */}
      <div className="flex justify-between items-center mb-6">
        <img src="/icons/logo-medimo-color.svg" alt="medimo 로고" className="w-[112px]" />
        <img src="/icons/bell.svg" alt="알림" className="w-6 h-6" />
      </div>

      {/* 오늘의 정보 */}
      <h1 className="text-h1 font-extrabold mb-3">오늘의 정보</h1>
      <button
        onClick={() => navigate('/guide')}
        className="w-full mb-8 rounded-xl overflow-hidden"
      >
        <img
          src="/icons/banner-medimo-guide.svg"
          alt="메디모 사용법 알아보기"
          className="w-full h-auto"
        />
      </button>

      {/* 관리하기 */}
      <h1 className="text-h1 font-extrabold mb-3">관리하기</h1>
      <div className="grid grid-cols-2 gap-3">
        {/* 진료 요청 (SVG 포함 버튼 전체가 이미지) */}
        <button
          onClick={() => navigate('/farmer/request')}
          className="w-full h-[120px]"
        >
          <img
            src="/icons/card-request.svg"
            alt="진료 요청"
            className="w-full h-full object-cover"
          />
        </button>

        {/* 요청 내역 */}
        <button
          onClick={() => navigate('/farmer/history')}
          className="w-full h-[120px]"
        >
          <img
            src="/icons/card-history.svg"
            alt="요청 내역"
            className="w-full h-full object-cover"
          />
        </button>

        {/* 약품 및 예방접종 */}
        <button
          onClick={() => navigate('/farmer/medicine')}
          className="w-full h-[120px] col-span-2"
        >
          <img
            src="/icons/card-medicine.svg"
            alt="약품 및 예방 접종"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 max-w-mobile mx-auto bg-white border-t border-greyscale-grey300 flex justify-around items-center h-[64px] rounded-t-[20px]">
        <button className="flex flex-col items-center text-greyscale-black">
          <img src="/icons/bn-home-black.svg" alt="홈" className="w-6 h-6" />
          <span className="text-caption2 mt-[2px] font-semibold">홈</span>
        </button>
        <button
          className="flex flex-col items-center text-greyscale-grey400"
          onClick={() => navigate('/farmer/mypage')}
        >
          <img src="/icons/bn-mypage-gray.svg" alt="내 정보" className="w-6 h-6" />
          <span className="text-caption2 mt-[2px]">내 정보</span>
        </button>
      </div>
    </div>
  );
}
