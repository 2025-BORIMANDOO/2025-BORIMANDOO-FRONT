import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const locationOptions = ["전체", "서울", "경기", "인천", "강원", "충청", "경상", "전라", "제주"];

export default function LocationFilterPage() {
  const [selected, setSelected] = useState("전체");
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelected(option);
    navigate(-1); // 선택 후 이전 페이지로 돌아감
  };

  return (
    <div className="w-full max-w-[375px] min-h-screen mx-auto px-[20px] pt-[40px] bg-white font-suit text-greyscale-black">
      <h1 className="text-h4 font-semibold mb-[20px]">지역 선택</h1>
      <div className="flex flex-col gap-[12px]">
        {locationOptions.map((option) => (
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
