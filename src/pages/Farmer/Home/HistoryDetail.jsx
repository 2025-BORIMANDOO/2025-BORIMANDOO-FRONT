// src/pages/Farmer/Home/HistoryDetail.jsx
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/Header";

export default function HistoryDetail() {
  const navigate = useNavigate();

  return (
    <div className="w-[375px] mx-auto min-h-screen bg-white font-suit px-[20px] pb-[88px]">
      {/* 헤더 */}
      <div className="relative">
        <Header title="진료 요청 내역" showBack onBack={() => navigate(-1)} />
        <button
          className="absolute top-[74px] right-0 px-3 py-1 rounded-lg bg-primary-blue text-white text-caption1 font-semibold"
          onClick={() => {
            navigate('/farmer/home/estimate');
          }}
        >
        견적서 열람
      </button>

      </div>

      {/* 진행 단계 표시 */}
      <div className="bg-[#F1F3F5] rounded-xl px-4 py-3 mb-4">

        {/* 단계 텍스트 */}
        <div className="flex justify-between text-caption1 font-semibold mb-1">
          <span className="text-black">요청 대기</span>
          <span className="text-[#2D9CDB]">수락됨</span>
          <span className="text-[#BDBDBD]">진료 완료</span>
        </div>

        {/* 진행 바 */}
        <div className="w-full h-[6px] bg-[#E0E0E0] rounded-full">
        <div className="h-full w-1/2 bg-[#2D9CDB] rounded-full" />
        </div>
      </div>


      {/* 날짜, 위치 */}
      <p className="text-caption2 text-[#828282] mb-1">2025.07.29</p>
      <p className="text-body3 text-[#4F4F4F] mb-2">서울시 서대문구 신촌동</p>

      {/* 긴급 태그 */}
      <div className="inline-flex items-center gap-1 bg-[#D35C5C] text-white px-3 py-1 rounded-full text-caption2 font-semibold mb-4">
  <img src="/icons/emergency.svg" alt="긴급 아이콘" className="w-4 h-4" />
  긴급
</div>

      {/* 항목들 */}
<div className="space-y-3">
  {/* 가축 종류 */}
  <div className="bg-greyscale-grey100 rounded-xl p-4 flex justify-between items-start">
    <p className="text-title2 text-greyscale-grey600">가축 종류</p>
    <p className="text-title1 text-greyscale-black text-right">소</p>
  </div>

  {/* 담당의 */}
  <div className="bg-greyscale-grey100 rounded-xl p-4 flex justify-between items-start">
    <p className="text-title2 text-greyscale-grey600">담당의</p>
    <p className="text-title1 text-greyscale-black text-right">손하늘</p>
  </div>

  {/* 증상 */}
  <div className="bg-greyscale-grey100 rounded-xl p-4 flex flex-col items-start gap-2">
  {/* 라벨 (상단 왼쪽) */}
  <p className="text-title2 text-greyscale-grey600">증상</p>

  {/* 본문 (하단) */}
  <p className="text-title1 text-greyscale-black">
    증상 리스트와 작성한 텍스트가 여기에 보여야 함. 증상 리스트와 작성한 텍스트가 여기에 보여야 함.
  </p>
</div>


  {/* 첨부 사진 */}
  <div className="bg-greyscale-grey100 rounded-xl p-4">
    <p className="text-title2 text-greyscale-grey600 mb-2">첨부 사진</p>
    <div className="w-full h-[120px] bg-greyscale-grey200 rounded-xl flex justify-center items-center overflow-hidden">
      <img
        src="/images/photo-placeholder.png"
        alt="첨부 사진"
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  </div>
</div>


    </div>
  );
}
