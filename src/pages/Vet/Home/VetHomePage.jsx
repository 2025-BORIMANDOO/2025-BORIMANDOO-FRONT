import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/Header";

export default function VetHomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-mobile mx-auto min-h-screen bg-white px-screenMargin pt-[60px] pb-[88px] font-suit text-greyscale-black">
      {/* 상단바 */}
      <Header showLogo={true} showBell={true} showBack={false} />

      {/* 오늘의 정보 */}
      <h1 className="text-h1 font-extrabold mb-3">오늘의 정보</h1>
      <button
        onClick={() => navigate('/guide')}
        className="mb-8 w-[335px] h-[176px] rounded-xl overflow-hidden"
      >
        <img
          src="/icons/card-howtouse.svg"
          alt="메디모 사용법 알아보기"
          className="w-full h-full object-cover"
        />
      </button>

      {/* 관리하기 */}
      <h1 className="text-h1 font-extrabold mb-3">관리하기</h1>
      <div className="grid grid-cols-2 gap-x-[8px] gap-y-[8px]">
        {/* 진료 요청 */}
        <button
          onClick={() => navigate('/farmer/request')}
          className="w-[164px] h-[188px]"
        >
          <img
            src="/icons/card-vet-request.svg"
            alt="진료 요청"
            className="w-full h-full object-cover"
          />
        </button>

        <div className="flex flex-col gap-[8px]">
          {/* 진료 이력 */}
          <button
            onClick={() => navigate('/farmer/history')}
            className="w-[163px] h-[90px]"
          >
            <img
              src="/icons/card-vet-history.svg"
              alt="진료 이력"
              className="w-full h-full object-cover"
            />
          </button>

          {/* 수익 추적 */}
          <button
            onClick={() => navigate('/farmer/medicine')}
            className="w-[163px] h-[90px]"
          >
            <img
              src="/icons/card-vet-medicine.svg"
              alt="수익 추적"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
