import React from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../../components/Header';

export default function EstimateConfirm() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[375px] min-h-screen mx-auto bg-white flex flex-col items-center justify-start font-suit px-6 relative">

      <Header showLogo={true} showBell={true} showBack={false} />
      {/* 로고 */}
      <img src="/icons/logo-m-color.svg"
        alt="메디모 로고"
        className="w-[104px] h-auto absolute top-[265px] left-[122px]"
        />
      {/* 안내 문구 */}
      <p className="text-h1 text-greyscale-black mb-[200px] h-auto absolute top-[370px] left-[77px]">
        의사 선택이 완료되었습니다.
      </p>

      {/* 진료 요청 내역 보기 버튼 */}
      <button
        className="absolute bottom-10 w-full max-w-[327px] py-4 bg-primary-blue text-white rounded-xl text-button1 font-semibold"
        onClick={() => navigate("/farmer/home/history/:id")}
      >
        진료 요청 내역 보기
      </button>
    </div>
  );
}
