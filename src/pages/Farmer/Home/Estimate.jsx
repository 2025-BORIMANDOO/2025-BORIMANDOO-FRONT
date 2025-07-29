import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/Header";

export default function EstimatePage() {
  const navigate = useNavigate();

  const estimates = [
    {
      id: 1,
      price: '45,000',
      vetName: '손하늘 담당의',
      method: '안녕하십니까~ 안녕하십니까~ 안녕하십니까~ 안녕하십니까~ 안녕하십니까~ 안녕하십니까~',
    },
    {
      id: 2,
      price: '45,000',
      vetName: '손하늘 담당의',
      method: '안녕하십니까~ 안녕하십니까~ 안녕하십니까~ 안녕하십니까~ 안녕하십니까~ 안녕하십니까~',
    },
  ];

  return (
    <div className="w-full max-w-mobile min-h-screen bg-white mx-auto px-screenMargin pb-[100px] font-suit text-greyscale-black">
    <Header title="견적서 검토하기" showBack onBack={() => navigate(-1)} />

      {/* 견적 카드 리스트 */}
      <div className="flex flex-col gap-4">
        {estimates.map((estimate) => (
          <div
            key={estimate.id}
            className="bg-[#F4F4F4] rounded-[12px] px-4 py-3 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <p className="text-body1 font-semibold">{estimate.price} 원</p>
              <button className="text-caption1 text-white font-semibold bg-primary-blue rounded px-2 py-1"
              onClick={() => {
            navigate('/farmer/home/estimateconfirm')}}
                              >
                선택하기
              </button>
            </div>
            <p className="text-body2 text-greyscale-700">{estimate.vetName}</p>
            <div className="bg-white rounded px-2 py-2 text-caption1 text-greyscale-600 max-h-[100px] overflow-y-scroll">
              {estimate.method}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
