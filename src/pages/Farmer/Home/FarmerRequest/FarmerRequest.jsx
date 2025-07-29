import React, { useState } from 'react';

export default function FarmerRequest() {
  const [urgency, setUrgency] = useState('일반');
  const [animalType, setAnimalType] = useState('소');
  const [symptom, setSymptom] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-mobile mx-auto min-h-screen bg-white px-screenMargin pt-[60px] pb-10 font-suit text-greyscale-black">
      <h1 className="text-h1 font-extrabold mb-6">진료 요청하기</h1>

      {/* 긴급도 */}
      <div className="mb-6">
        <p className="text-label1 font-semibold mb-2">긴급도</p>
        <div className="flex flex-col gap-2">
          {['일반', '긴급'].map((level) => {
            const isSelected = urgency === level;
            return (
              <button
                key={level}
                onClick={() => setUrgency(level)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg border text-body1 font-medium ${
                  isSelected
                    ? 'border-primary-blue text-primary-blue'
                    : 'border-greyscale-grey300 text-greyscale-grey500'
                }`}
              >
                {level}
                <img
                  src={
                    isSelected
                      ? '/icons/check-blue.svg'
                      : '/icons/check-gray.svg'
                  }
                  alt="선택 체크"
                  className="w-4 h-4"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* 가축 종류 */}
      <div className="mb-6">
        <p className="text-label1 font-semibold mb-2">가축 종류</p>
          <button
            onClick={() => navigate('/farmer/select-animal', { state: { selected: animalType } })}
            className="flex justify-between items-center w-full px-4 py-3 border border-greyscale-grey300 rounded-lg text-body1 text-greyscale-black"
          >
          {animalType}
          <img
            src="/icons/chevron-down.svg"
            alt="드롭다운"
            className="w-4 h-4 text-greyscale-grey500"
          />
        </button>
      </div>

      {/* 증상 */}
      <div className="mb-6">
        <p className="text-label1 font-semibold mb-2">
          증상{' '}
          <span className="block text-caption1 font-regular text-greyscale-grey500">
            주요 증상, 변 / 기력 / 식욕 / 피부 상태, 체온, 기타 증상을 작성해주세요.
          </span>
        </p>
        <textarea
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="텍스트를 입력해주세요."
          maxLength={1000}
          rows={5}
          className="w-full px-4 py-3 border border-greyscale-grey300 rounded-lg text-body1"
        />
        <p className="text-right text-caption2 text-greyscale-grey400 mt-1">
          {symptom.length}/1000
        </p>
      </div>

      {/* 사진 */}
      <div className="mb-6">
        <p className="text-label1 font-semibold mb-2">사진</p>
        <p className="text-body2 text-greyscale-grey500 mb-2">
          증상이 드러나는 사진을 첨부해주세요.
        </p>
        <label className="block w-full h-[120px] bg-greyscale-grey100 border border-greyscale-grey300 rounded-lg flex flex-col items-center justify-center text-greyscale-grey500 text-body2 cursor-pointer">
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          <img src="/icons/image-plus.svg" alt="사진 추가" className="w-6 h-6 mb-1" />
          사진 추가 {imageFile ? '(1/1)' : '(0/1)'}
        </label>
      </div>

      {/* 제출 버튼 */}
      <button className="w-full bg-primary-blue text-greyscale-white rounded-lg py-3 text-label1 font-semibold">
        제출하기
      </button>
    </div>
  );
}
