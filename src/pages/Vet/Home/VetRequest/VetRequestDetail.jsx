// src/pages/VetRequest/VetRequestDetail.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../../components/Header';
import { vetRequests } from '../../../../data/vetRequestDummy';

export default function VetRequestDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const request = vetRequests.find((r) => r.id === Number(id));

  if (!request) return <div className="text-center mt-20">요청 정보를 찾을 수 없습니다.</div>;

  return (
    <div className="w-[375px] mx-auto min-h-screen bg-white font-suit px-[20px] pb-[88px] pt-[60px]">
      <Header title="진료 요청" showBack onBack={() => navigate(-1)} />

      {/* 날짜 & 위치 */}
      <div className="mt-[22px] mb-1 text-caption2 text-greyscale-grey600">{request.date}</div>
      <div className="text-body3 text-greyscale-grey800 mb-2">{request.address}</div>

      {/* 상태 태그 */}
      <div className="inline-flex items-center px-3 py-1 bg-secondary-emerald text-white text-caption2 font-semibold rounded-full mb-4">
        {request.type}
      </div>

      {/* 항목들 */}
      <div className="space-y-3">
        {/* 가축 종류 */}
        <div className="bg-greyscale-grey100 rounded-xl p-4 flex justify-between items-start">
          <p className="text-title2 text-greyscale-grey600">가축 종류</p>
          <p className="text-title1 text-greyscale-black text-right">{request.animal}</p>
        </div>

        {/* 증상 */}
        <div className="bg-greyscale-grey100 rounded-xl p-4 flex flex-col items-start gap-2">
          <p className="text-title2 text-greyscale-grey600">증상</p>
          <p className="text-title1 text-greyscale-black">{request.symptom}</p>
        </div>

        {/* 첨부 사진 */}
        <div className="bg-greyscale-grey100 rounded-xl p-4">
          <p className="text-title2 text-greyscale-grey600 mb-2">첨부 사진</p>
          <div className="w-full h-[120px] bg-greyscale-grey200 rounded-xl flex justify-center items-center overflow-hidden">
            <img
              src={request.image}
              alt="첨부 사진"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <button
        className="mt-8 w-full h-[50px] bg-primary-blue text-white text-body2 font-semibold rounded-xl"
        onClick={() => navigate('/vet/estimate/write')}
      >
        견적 작성하기
      </button>
    </div>
  );
}
