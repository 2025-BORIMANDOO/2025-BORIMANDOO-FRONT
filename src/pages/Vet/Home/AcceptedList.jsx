import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';

export default function AcceptedList() {
  const navigate = useNavigate();

  const dummyRequests = [
    {
      id: 1,
      date: '2025.07.29',
      address: '서울시 서대문구 신촌동',
      animalType: '소',
      type: '일반',
    },
    {
      id: 2,
      date: '2025.07.29',
      address: '서울시 서대문구 신촌동',
      animalType: '돼지',
      type: '긴급',
    },
  ];

  return (
    <div className="w-full max-w-[375px] min-h-screen mx-auto bg-white px-[20px] pb-[88px] font-suit">
      <Header title="요청 수락 목록" showBack onBack={() => navigate(-1)} />

      <div className="flex flex-col gap-[12px] mt-[24px]">
        {dummyRequests.map((item) => (
          <div
            key={item.id}
            className="w-full bg-[#F5F6F8] rounded-[10px] px-[16px] py-[12px] flex justify-between items-center"
          >
            {/* 왼쪽 정보 */}
            <div className="flex flex-col gap-[6px]">
              <p className="text-caption1 text-greyscale-300">{item.date}</p>
              <p className="text-body1 text-greyscale-black">{item.address}</p>

              {item.type === '일반' ? (
  <div className="flex items-center gap-[4px] bg-secondary-emerald text-white text-caption1 px-[8px] py-[2px] rounded-[4px] w-fit">
    {/* 빈 공간을 동일하게 맞추기 위한 가짜 아이콘 */}
    <div className="w-[4px] h-[12px]" />
    일반
    <div className="w-[4px] h-[12px]" />
  </div>
) : (
  <div className="flex items-center gap-[4px] bg-[#D35C5C] text-white text-caption1 px-[8px] py-[2px] rounded-[4px] w-fit">
    <img
      src="/icons/emergency.svg"
      alt="긴급"
      className="w-[12px] h-[12px]"
    />
    긴급
  </div>
)}
            </div>

            {/* 오른쪽 가축종 */}
            <div className="bg-[#E5E6EB] px-[12px] py-[4px] rounded-[8px] text-body2 text-greyscale-black">
              {item.animalType}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
