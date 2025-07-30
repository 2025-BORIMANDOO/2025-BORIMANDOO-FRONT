import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const emergencyOptions = ["전체", "일반", "긴급"];

export default function EmergencyFilterPage() {
  const [selected, setSelected] = useState("전체");
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelected(option);
    navigate(-1); // 선택 후 이전 페이지로 이동
  };

  return (
    <div className="w-full max-w-[375px] min-h-screen mx-auto px-[20px] pt-[40px] bg-white font-suit text-greyscale-black">
      <h1 className="text-h4 font-semibold mb-[20px]">긴급 여부</h1>
      <div className="flex flex-col gap-[12px]">
        {emergencyOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`text-left px-[16px] py-[12px] rounded-[8px] border ${
              selected === option
                ? "border-primary-blue bg-[#F2F6FF] text-primary-blue font-semibold"
                : "border-gray-200 bg-white text-black"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
