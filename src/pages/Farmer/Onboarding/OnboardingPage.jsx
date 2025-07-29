import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InfoInputPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const isValid = phone.trim() !== '' && address.trim() !== '';

  return (
    <div className="min-h-screen bg-white px-[20px] pt-[100px] max-w-[375px] mx-auto flex flex-col justify-between">
      <div>
        {/* 로고 */}
        <img
          src="/icons/logo-medimo-color.svg"
          alt="medimo logo"
          className="w-[100px] h-auto mb-[60px]"
        />

        {/* 텍스트 */}
        <p className="text-[20px] font-semibold leading-[30px] mb-1">
          안녕하세요 손하늘 님
        </p>
        <p className="text-[20px] font-semibold leading-[30px] mb-[40px]">
          시작을 위해 빈칸을 채워주세요.
        </p>

        {/* 전화번호 */}
        <div className="mb-[40px]">
          <label className="block text-[16px] font-semibold text-black mb-[6px]">
            전화번호
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01012345678"
            className="w-[335px] h-[56px] rounded-[8px] border border-gray-300 px-4 text-[14px] placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* 농장주소 */}
        <div>
          <label className="block text-[16px] font-semibold text-black mb-[6px]">
            농장주소
          </label>
          <p className="text-[12px] text-gray-400 mb-[6px]">
            정확한 농장 주소를 작성해주세요.
          </p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="서울시 서대문구 성산로 1길 32, 405호"
            className="w-[335px] h-[56px] rounded-[8px] border border-gray-300 px-4 text-[14px] placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* 버튼 */}
      <button
        className={`mt-[80px] w-full h-[56px] rounded-[8px] text-white font-semibold transition ${
        isValid ? 'bg-[#2F80ED]' : 'bg-gray-400 cursor-not-allowed'}`}
        disabled={!isValid}
        onClick={() => {
          if (isValid) {
            navigate('/farmer/home'); // 홈화면으로 이동
            }
          }
        }
      >
      메디모 시작하기
      </button>
    </div>
  );
}
