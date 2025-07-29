// src/pages/Farmer/Home/FarmerRequest/AnimalTypeSelectPage.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const animalOptions = ['소', '돼지', '말', '닭', '기타'];

export default function AnimalTypeSelectPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.state?.selected || '소';

  const handleSelect = (value) => {
    navigate('/farmer/home/farmerrequest', {
      state: { selectedAnimal: value }, // ✅ 수정됨
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute bottom-0 left-0 right-0 bg-greyscale-white rounded-t-[20px] px-5 pt-6 pb-10 max-w-mobile mx-auto">
        <h2 className="text-label1 font-semibold mb-4">가축 종류</h2>
        <ul className="flex flex-col gap-4">
          {animalOptions.map((animal) => {
            const isSelected = animal === current;
            return (
              <li
                key={animal}
                className="flex justify-between items-center text-label1 font-medium cursor-pointer"
                onClick={() => handleSelect(animal)}
              >
                <span className={isSelected ? 'text-primary-blue font-semibold' : 'text-greyscale-black'}>
                  {animal}
                </span>
                <img
                  src={isSelected ? '/icons/check-blue.svg' : '/icons/check-gray.svg'}
                  alt="선택 체크"
                  className="w-4 h-4"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
