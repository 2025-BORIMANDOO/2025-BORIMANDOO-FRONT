import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";

export default function VetRequestListPage() {
  const navigate = useNavigate();

  const mockRequests = [
    { id: 1, date: "2025.07.29", address: "서울시 서대문구 신촌동", animal: "소", type: "일반" },
    { id: 2, date: "2025.07.29", address: "서울시 서대문구 신촌동", animal: "돼지", type: "일반" },
    { id: 3, date: "2025.07.29", address: "서울시 서대문구 신촌동", animal: "소", type: "일반" },
  ];

  return (
    <div className="w-[375px] mx-auto min-h-screen bg-white font-suit px-[20px] pb-[88px]">
      <Header title="진료 요청" showBack onBack={() => navigate(-1)} /> 

      {/* 필터 버튼 */}
      <div className="flex gap-3 px-5 mb-4">
        <button className="text-caption1 text-greyscale-black border border-greyscale-light rounded-full px-4 py-2">
          긴급 여부
        </button>
        <button className="text-caption1 text-greyscale-black border border-greyscale-light rounded-full px-4 py-2">
          위치 설정
        </button>
      </div>

      {/* 요청 카드 리스트 */}
      <div className="flex flex-col gap-3 px-5">
        {mockRequests.map((req) => (
          <div
            key={req.id}
            className="bg-greyscale-lightest rounded-lg p-4 shadow-sm flex justify-between items-start cursor-pointer"
            onClick={() => navigate(`/vet/request/${req.id}`)}
          >
            <div>
              <p className="text-caption1 text-greyscale-gray">{req.date}</p>
              <p className="text-body2 text-greyscale-black">{req.address}</p>
              <p className="text-button2 text-primary-blue mt-1">{req.animal}</p>
            </div>
            <span className="text-caption1 font-semibold text-white bg-secondary-emerald px-3 py-1 rounded-full">
              {req.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
