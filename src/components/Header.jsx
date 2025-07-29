import React from 'react';

function Header({
  title,
  onBack,
  showBack = true,
  showLogo = false,   // 기존처럼 유지
  showBell = false    // 기존처럼 유지
}) {
  return (
    <header className="w-full bg-white">
      {/* 상태바 */}
      <img
        src="/icons/statusbar.svg"
        alt="상태바"
        className="w-full h-[56px] object-cover"
      />

      {/* logobar: showLogo 또는 showBell이 true일 때만 보여줌 */}
      {(showLogo || showBell) && (
        <img
          src="/icons/logobar.svg"
          alt="로고바"
          className="w-full h-[48px] object-cover mb-2"
        />
      )}

      {/* 뒤로가기 + 타이틀 */}
      <div className="relative h-[60px] flex items-center justify-center">
        {showBack && (
        <button
          onClick={onBack}
          className="absolute left-[0px] top-[18px] w-[24px] h-[24px]"
        >
        <img
          src="/icons/arrow-left.svg"
          alt="뒤로가기"
          className="w-full h-full"
        />
      </button>
      )}
      <h1 className="text-base font-semibold">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
