import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelectPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-[375px] h-[812px] mx-auto overflow-hidden bg-white font-suit">
      {/* 배경 이미지 */}
      <img
        src="/images/role-select.png" // 이미지 파일명 확인
        alt="배경"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* 안내 문구 */}
      <div className="absolute left-[61px] top-[415px] z-10 text-center">
        <p className="text-title1 font-semibold leading-[24px] text-black">
          안녕하세요:)
          <br />
          어떤 서비스가 필요해 찾아오셨나요?
        </p>
      </div>

      {/* 상단 버튼 - 의사가 필요해요 */}
      <button
        onClick={() => navigate("/farmer/onboarding")}
        className="absolute left-[28px] top-[503px] w-[319px] h-[113px] bg-primary-blue rounded-[12px] px-[16px] py-[18px] text-left text-white z-10"
      >
        <p className="text-title1 font-extrabold leading-[24px] mb-[4px]">
          의사가 필요해요
        </p>
        <p className="text-body1 leading-[18px] text-greyscale-300">
          낙농가, 축산업자 등 자신의 가축 상태를
          <br />
          알고 싶은 사람들
        </p>
      </button>

      {/* 하단 버튼 - 환자가 필요해요 */}
      <button
        onClick={() => navigate("/vet/onboarding")}
        className="absolute left-[28px] top-[624px] w-[319px] h-[92px] bg-primary-darkBlue rounded-[12px] px-[16px] py-[18px] text-left text-white z-10"
      >
        <p className="text-title1 font-extrabold leading-[24px] mb-[4px]">
          환자가 필요해요
        </p>
        <p className="text-body1 leading-[18px] text-greyscale-300">
          가축의 상태를 진단하고 치료할 수 있는 수의사
        </p>
      </button>
    </div>
  );
}
