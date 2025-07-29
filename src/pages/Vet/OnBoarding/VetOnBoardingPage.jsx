import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VetOnboardingPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [license, setLicense] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const isComplete = phone && license && imageFile;

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-mobile mx-auto min-h-screen bg-white px-screenMargin pt-[60px] pb-10 font-suit text-greyscale-black">
      {/* 로고 */}
      <img src="/icons/logo-medimo-color.svg" alt="medimo logo" className="w-[112px] mb-6" />

      {/* 인삿말 */}
      <h1 className="text-h1 font-extrabold leading-[30px] mb-2">안녕하세요 손하늘 님</h1>
      <p className="text-body1 font-regular mb-6">시작을 위해 빈칸을 채워주세요.</p>

      {/* 전화번호 */}
      <div className="mb-5">
        <p className="text-label1 font-semibold mb-1">전화번호</p>
        <input
          type="tel"
          placeholder="숫자만 입력해주세요."
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          className="w-full px-4 py-3 border border-greyscale-grey300 rounded-lg text-body1"
        />
      </div>

      {/* 면허번호 */}
      <div className="mb-5">
        <p className="text-label1 font-semibold mb-1">의사면허번호</p>
        <input
          type="text"
          placeholder="주소를 입력해주세요."
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          className="w-full px-4 py-3 border border-greyscale-grey300 rounded-lg text-body1"
        />
      </div>

      {/* 사진 */}
      <div className="mb-6">
        <p className="text-label1 font-semibold mb-1">면허증 사진</p>
        <p className="text-body2 text-greyscale-grey500 mb-2">000은 가리고 제출해주세요.</p>
        <label className="block w-full h-[120px] bg-greyscale-grey100 border border-greyscale-grey300 rounded-lg flex flex-col items-center justify-center text-greyscale-grey500 text-body2 cursor-pointer">
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          <img src="/icons/add-photo.svg" alt="사진 추가" className="w-6 h-6 mb-1" />
          사진 추가 {imageFile ? '(1/1)' : '(0/1)'}
        </label>
      </div>

      {/* 버튼 */}
      <button
        className={`w-full py-3 rounded-lg text-label1 font-semibold ${
          isComplete
            ? 'bg-primary-blue text-white'
            : 'bg-greyscale-grey300 text-greyscale-grey500 cursor-not-allowed'
        }`}
        disabled={!isComplete}
        onClick={() => navigate('/vet/home')}
      >
        메디모 시작하기
      </button>
    </div>
  );
}
