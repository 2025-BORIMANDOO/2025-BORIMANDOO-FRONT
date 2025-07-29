// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen max-w-[375px] mx-auto bg-white px-4 pt-5 pb-24">
      {/* 상단 바 */}
      <div className="flex justify-between items-center mb-6">
        <img src="/icons/logo-medimo-color.svg" alt="medimo logo" className="h-6" />
        <img src="/icons/alert.svg" alt="알림" className="h-5 w-5" />
      </div>

      {/* 오늘의 정보 */}
      <h2 className="text-lg font-semibold mb-2">오늘의 정보</h2>
      <div className="w-full h-[140px] bg-gray-100 rounded-xl mb-6" />

      {/* 관리하기 */}
      <h2 className="text-lg font-semibold mb-3">관리하기</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#094DB1] text-white rounded-xl p-4 flex flex-col justify-between h-[120px]">
          <div>
            <p className="font-semibold">진료 요청</p>
            <p className="text-sm mt-1">지금 의사가 필요할 때</p>
          </div>
          <img src="/icons/hospital.svg" alt="진료 요청" className="w-6 h-6 self-end" />
        </div>
        <div className="bg-[#E8EAEE] rounded-xl p-4 h-[120px] flex items-center justify-center text-center text-black font-semibold">
          요청 내역
        </div>
        <div className="bg-[#E8EAEE] rounded-xl p-4 h-[120px] flex items-center justify-center text-center text-black font-semibold col-span-2">
          약품 및 예방 접종
        </div>
      </div>

      {/* 하단 바 (fixed) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#F5F6F8] max-w-[375px] mx-auto border-t border-gray-200 flex justify-around py-2">
        <button className="flex flex-col items-center text-[#1F1F1F]">
          <img src="/icons/home.svg" className="w-6 h-6 mb-1" />
          <span className="text-xs">홈</span>
        </button>
        <button
          className="flex flex-col items-center text-[#B7B7B7]"
          onClick={() => navigate('/farmer/mypage/mypage')}
        >
          <img src="/icons/user.svg" className="w-6 h-6 mb-1" />
          <span className="text-xs">내 정보</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
