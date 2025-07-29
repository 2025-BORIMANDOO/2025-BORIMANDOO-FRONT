// src/components/farmer/FarmRequestStatusCard.jsx
import React from 'react';

export default function FarmRequestStatusCard({ date, status, doctor }) {
  const getBadge = (status) => {
    const base = 'px-3 py-1 text-caption2 rounded-full text-white';
    switch (status) {
      case '요청 대기':
        return <span className={`${base} bg-[#4F4F4F]`}>요청 대기</span>;
      case '진료 예정':
        return <span className={`${base} bg-[#2AD1A3]`}>진료 예정</span>;
      case '진료 완료':
        return <span className={`${base} bg-[#C4C4C4]`}>진료 완료</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F1F3F5] px-4 py-3 rounded-xl flex justify-between items-start">
      <div>
        <p className="text-caption2 text-[#828282] mb-1">{date}</p>
        {getBadge(status)}
      </div>
      <p className="text-body3 text-[#1F1F1F]">{doctor || '미정'}</p>
    </div>
  );
}
