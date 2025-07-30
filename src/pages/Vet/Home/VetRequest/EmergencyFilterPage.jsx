import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const emergencyOptions = ["전체", "일반", "응급"];

export default function EmergencyFilterPage() {
  const [selected, setSelected] = useState("전체");
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelected(option);
    navigate(-1); // 선택 후 이전 페이지로 이동
  };

  return (
    <div className="w-full max-w-[375px] min-h-screen mx-auto px-4 pt-6 bg-white font-suit">
      {/* 상단바 */}
      <div className="relative flex items-center justify-center mb-8">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[18px] font-semibold text-black">긴급 여부</h1>
      </div>

      {/* 옵션 리스트 */}
      <div className="flex flex-col gap-4">
        {emergencyOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`w-full px-4 py-3 text-left rounded-lg border ${
              selected === option ? "border-primary-blue text-primary-blue font-semibold" : "border-gray-200"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
