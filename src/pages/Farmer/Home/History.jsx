// src/pages/Farmer/Home/History.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import { dummyRequests } from '../../../data/historyDummy';

export default function History() {
  const navigate = useNavigate();

  // 더미 데이터
  const dummyRequests = [
    {
      id: 1,
      date: '2025.07.29',
      status: '요청 대기',
      doctor: '미정',
    },
    {
      id: 2,
      date: '2025.07.29',
      status: '진료 예정',
      doctor: '손하늘',
    },
    {
      id: 3,
      date: '2025.07.29',
      status: '진료 완료',
      doctor: '금채원',
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case '요청 대기':
        return 'bg-[#4F4F4F] text-white';
      case '진료 예정':
        return 'bg-[#00C6AD] text-white';
      case '진료 완료':
        return 'bg-[#E0E0E0] text-[#828282]';
      default:
        return '';
    }
  };

  return (
    <div className="w-[375px] mx-auto min-h-screen bg-white font-suit px-[20px] pb-[88px]">
      <Header title="진료 요청 목록" showBack onBack={() => navigate(-1)} />

      <div className="flex flex-col gap-3 mt-4">
        {dummyRequests.map((item) => (
          <div
            key={item.id}
            className="bg-[#F5F6FA] p-4 rounded-xl flex justify-between items-start cursor-pointer"
            onClick={() => navigate(`/farmer/home/history/${item.id}`)}
          >
            <div className="flex flex-col gap-1">
              <p className="text-caption2 text-[#4F4F4F]">{item.date}</p>
              <span
                className={`text-caption2 px-3 py-1 rounded-full w-fit ${getStatusStyle(item.status)}`}
              >
                {item.status}
              </span>
            </div>
            <div className="text-caption1 text-[#4F4F4F]">
              <p className="mb-1">담당의</p>
              <p className="text-right font-semibold">{item.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
