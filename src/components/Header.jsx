// components/Header.jsx
import React from 'react';

function Header({ title, onBack, showBell = false }) {
  return (
    <header className="w-full bg-white shadow px-4 pt-6 pb-3">
      {/* 상태바 */}
      <div className="flex justify-between items-center text-xs text-black mb-2">
        <span>9:41</span>
        <img src="/icons/statusbar.svg" alt="상태 표시" className="h-4" />
      </div>

      {/* 로고 + 알림 */}
      <div className="flex justify-between items-center mb-2">
        <img src="/icons/logo-medimo-color.svg" alt="medimo" className="h-5" />
        {showBell && <img src="/icons/bell.svg" alt="알림" className="w-5 h-5" />}
      </div>

      {/* 뒤로가기 + 타이틀 */}
      <div className="flex justify-between items-center">
        <button onClick={onBack}>
          <img src="/icons/arrow-left.svg" alt="뒤로가기" className="w-5 h-5" />
        </button>
        <h1 className="text-base font-semibold">{title}</h1>
        <div className="w-5" /> {/* 오른쪽 여백 확보 */}
      </div>
    </header>
  );
}

export default Header;
