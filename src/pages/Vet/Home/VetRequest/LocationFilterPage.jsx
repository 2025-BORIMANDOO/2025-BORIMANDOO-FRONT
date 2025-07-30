import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../components/Header';

const locations = ['서울시 강남구', '서울시 서대문구', '서울시 중구', '서울시 송파구'];

export default function RequestLocationPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');

  return (
    <div className="w-[375px] min-h-screen mx-auto bg-white font-suit px-[20px] pb-[88px]">
      <Header title="지역 설정" showBack onBack={() => navigate(-1)} />

      <div className="mt-[64px] space-y-3">
        {locations.map((loc) => (
          <div
            key={loc}
            onClick={() => setSelected(loc)}
            className="w-full h-[60px] rounded-[12px] px-4 flex justify-between items-center border border-greyscale-grey200 cursor-pointer"
          >
            <span className="text-body2 text-greyscale-black">{loc}</span>
            {selected === loc && (
              <img src="/icons/check-blue.svg" alt="선택됨" className="w-5 h-5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}