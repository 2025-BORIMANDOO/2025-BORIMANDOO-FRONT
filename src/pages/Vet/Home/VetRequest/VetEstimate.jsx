import React, { useState } from "react";
import Header from "../../../../components/Header";

export default function VetEstimate() {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만
    setPrice(value);
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 1000) {
      setDescription(e.target.value);
    }
  };

  return (
    <div className="w-full max-w-[375px] min-h-screen mx-auto px-4 pt-6 bg-white font-suit">
      {/* 상단바 */}
      <div className="relative flex items-center justify-center mb-6">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[18px] font-semibold text-black">견적서 작성</h1>
      </div>

      {/* 예상 견적 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-greyscale-700 mb-1">예상 견적</label>
        <div className="relative">
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            placeholder="숫자만 입력해주세요."
            className="w-full h-[48px] rounded-lg border border-greyscale-200 pl-4 pr-10 text-sm"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-greyscale-500">원</span>
        </div>
      </div>

      {/* 조치 방식 */}
      <div className="mb-10">
        <label className="block text-sm font-medium text-greyscale-700 mb-1">조치 방식</label>
        <p className="text-xs text-greyscale-500 mb-2">사용 예정 약품과 조치 방식에 대해 서술해주세요.</p>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="텍스트를 입력해주세요."
          className="w-full h-[160px] resize-none rounded-lg border border-greyscale-200 p-4 text-sm"
        />
        <div className="text-right text-xs text-greyscale-400 mt-1">{description.length}/1000</div>
      </div>

      {/* 전송 버튼 */}
      <button
        type="button"
        className="w-full h-[48px] bg-primary-blue text-white font-semibold text-base rounded-[10px]"
      >
        견적서 전송하기
      </button>
    </div>
  );
}
