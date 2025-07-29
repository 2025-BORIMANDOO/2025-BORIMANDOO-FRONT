import React from 'react';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/Header";

export default function VetMyPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen max-w-mobile mx-auto px-screenMargin pb-20 pt-[60px] font-suit text-greyscale-black">
      {/* 상단 로고 및 알림 */}
      <Header showLogo={true} showBell={true} showBack={false} />

      {/* 유저 이름 */}
      <h1 className="text-h1 font-extrabold leading-[30px] mb-6">수의사 님</h1>

      {/* 내 계정 섹션 */}
      <div className="mb-8">
        <p className="text-caption1 font-semibold text-greyscale-grey600 mb-4">내 계정</p>
        <ul className="space-y-4">
          <li className="text-label1 font-extrabold">정보 수정</li>
          <li className="text-label1 font-extrabold">로그아웃</li>
          <li className="text-label1 font-extrabold">탈퇴하기</li>
        </ul>
      </div>

      {/* 서비스 섹션 */}
      <div className="mb-8">
        <p className="text-caption1 font-semibold text-greyscale-grey600 mb-4">서비스</p>
        <ul className="space-y-4">
          <li className="text-label1 font-extrabold">진료 내역</li>
          <li className="text-label1 font-extrabold">구독 관리</li>
        </ul>
      </div>

      {/* 약관 섹션 */}
      <div>
        <p className="text-caption1 font-semibold text-greyscale-grey600 mb-4">약관</p>
        <ul className="space-y-4">
          <li className="text-label1 font-extrabold">이용약관</li>
          <li className="text-label1 font-extrabold">개인정보처리방침</li>
        </ul>
      </div>
    </div>
  );
}
