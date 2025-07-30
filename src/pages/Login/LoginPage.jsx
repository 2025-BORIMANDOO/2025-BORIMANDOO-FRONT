import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const handleKakaoLogin = () => {
    //window.location.href = 'https://medimo.site/oauth2/authorization/kakao';
    navigate('/login/roleselect');
  };

  return (
    <div className="relative max-w-mobile mx-auto h-[812px] font-suit text-greyscale-black">
      {/* 배경 이미지 */}
      <img
        src="/images/bg-login.png"
        alt="배경"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/85 to-white/10 z-10" />

      {/* 콘텐츠 위치 수동 조정 */}
      <div className="relative z-20 w-full h-full">
        {/* 로고 */}
        <img
          src="/icons/logo-medimo-color.svg"
          alt="medimo"
          className="absolute left-[20px] top-[446px] w-[144px]"
        />

        {/* 텍스트 */}
        <p className="absolute left-[20px] top-[506px] text-body1 leading-[21px] text-greyscale-black">
          수의사 호출부터 기록까지 한 번에,<br />
          메디모입니다.
        </p>

        {/* 카카오 버튼 */}
        <button
          onClick={handleKakaoLogin}
          className="absolute left-[20px] top-[614px] w-[335px] bg-[#FEE500] text-[#191600] flex items-center justify-center gap-2 rounded-lg py-3 font-semibold text-label1"
        >
          <img src="/icons/kakao.svg" alt="카카오" className="w-5 h-5" />
          카카오로 3초 만에 시작하기
        </button>
      </div>
    </div>
  );
}
