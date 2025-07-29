import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: '홈',
      path: '/farmer/home',
      iconActive: '/icons/bn-home-black.svg',
      iconInactive: '/icons/bn-home-gray.svg',
    },
    {
      label: '내 정보',
      path: '/farmer/farmermypage',
      iconActive: '/icons/bn-mypage-black.svg',
      iconInactive: '/icons/bn-mypage-gray.svg',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full max-w-mobile mx-auto h-[88px] flex bg-greyscale-grey200 rounded-t-[24px] z-50 px-[24px]">
      {navItems.map(({ label, path, iconActive, iconInactive }) => {
        const isActive = location.pathname.startsWith(path);
        const iconSrc = isActive ? iconActive : iconInactive;
        const textColor = isActive ? 'text-greyscale-black' : 'text-greyscale-grey600';

        return (
          <button
            key={label}
            onClick={() => navigate(path)}
            className="flex-1 flex flex-col items-center justify-center"
          >
            <img src={iconSrc} alt={label} className="w-6 h-6 mb-[2px]" />
            <span className={`text-[14px] font-medium ${textColor}`}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
