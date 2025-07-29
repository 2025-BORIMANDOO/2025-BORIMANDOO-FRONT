import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../BottomNavigation';

export default function Layout() {
  return (
    <div className="bg-white max-w-mobile mx-auto font-suit text-greyscale-black">
      {/* 전체 페이지 스크롤 가능하게 */}
      <div className="min-h-screen flex flex-col">
        {/* 페이지별 콘텐츠 */}
        <div className="flex-1">
          <Outlet />
        </div>

        {/* 스크롤 따라 내려가는 바텀 내비 */}
        <BottomNavigation />
      </div>
    </div>
  );
}
