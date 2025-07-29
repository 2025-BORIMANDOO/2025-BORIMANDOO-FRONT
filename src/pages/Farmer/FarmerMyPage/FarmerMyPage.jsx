import React from 'react';
import { Bell } from 'lucide-react'; // 아이콘은 lucide-react 기준
import { useNavigate } from 'react-router-dom';

export default function FarmerMyPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen max-w-[375px] mx-auto px-5 pb-20 pt-[60px] font-suit text-[#1F1F1F]">
      {/* 상단 로고 및 알림 */}
      <div className="flex justify-between items-center mb-10">
        <img src="/icons/logo-medimo-color.svg" alt="medimo logo" className="w-[100px]" />
        <Bell className="w-6 h-6 text-black" />
      </div>

      {/* 유저 이름 */}
      <h1 className="text-[20px] font-extrabold leading-[30px] text-[#1F1F1F] mb-6">
        메디모 님
      </h1>

      {/* 내 계정 섹션 */}
      <div className="mb-8">
        <p className="text-[14px] font-semibold text-[#7A7A7A] mb-4">내 계정</p>
        <ul className="space-y-4">
          <li className="text-[16px] font-extrabold text-[#1F1F1F]">정보 수정</li>
          <li className="text-[16px] font-extrabold text-[#1F1F1F]">로그아웃</li>
          <li className="text-[16px] font-extrabold text-[#1F1F1F]">탈퇴하기</li>
        </ul>
      </div>

      {/* 서비스 섹션 */}
      <div className="mb-8">
        <p className="text-[14px] font-semibold text-[#7A7A7A] mb-4">서비스</p>
        <ul className="space-y-4">
          <li className="text-[16px] font-extrabold text-[#1F1F1F]">농장 정보</li>
          <li className="text-[16px] font-extrabold text-[#1F1F1F]">구독 관리</li>
        </ul>
      </div>

      {/* 약관 섹션 */}
      <div>
        <p className="text-[14px] font-semibold text-[#7A7A7A] mb-4">약관</p>
        <ul className="space-y-4">
          <li className="text-[16px] font-extrabold text-[#1F1F1F]">이용약관</li>
          <li className="text-[16px] font-extrabold text-[#1F1F1F]">개인정보처리방침</li>
        </ul>
      </div>

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto bg-white border-t border-gray-200 flex justify-around items-center h-[64px] rounded-t-[20px]">
        <button className="flex flex-col items-center text-[#7A7A7A]">
          <img src="/icons/bn-home-gray.svg" alt="홈" className="w-6 h-6" />
          <span className="text-[12px] mt-[2px]">홈</span>
        </button>
        <button
          className="flex flex-col items-center text-[#B7B7B7]"
          onClick={() => navigate('/mypage')}
        >
          <img src="/icons/bn-mypage-black.svg" alt="내 정보" className="w-6 h-6" />
          <span className="text-[12px] mt-[2px] font-semibold">내 정보</span>
        </button>
      </div>
    </div>
  );
}
