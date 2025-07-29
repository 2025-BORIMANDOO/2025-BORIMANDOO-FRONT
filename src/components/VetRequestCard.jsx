// src/components/vet/VetRequestCard.jsx
import React from 'react';

export default function VetRequestCard({ date, address, animal, emergency }) {
  return (
    <div className="bg-[#F1F3F5] px-4 py-3 rounded-xl flex justify-between items-start">
      <div>
        <p className="text-caption2 text-[#828282] mb-1">{date}</p>
        <p className="text-body3 text-[#4F4F4F] mb-1">{address}</p>
        <p className="text-body3 text-primary-blue underline">{animal}</p>
      </div>
      <span className="px-3 py-1 text-caption2 rounded-full bg-[#2AD1A3] text-white">
        {emergency ? '긴급' : '일반'}
      </span>
    </div>
  );
}