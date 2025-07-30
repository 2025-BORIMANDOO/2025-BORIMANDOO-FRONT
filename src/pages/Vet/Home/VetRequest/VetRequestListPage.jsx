import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";

export default function VetRequestListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 필터 상태
  const [emergency, setEmergency] = useState("전체");
  const [locationFilter, setLocationFilter] = useState("전체");

  // 뒤에서 받은 값이 있을 경우 반영
  useEffect(() => {
    const selectedEmergency = location.state?.selectedEmergency;
    const selectedLocation = location.state?.selectedLocation;

    if (selectedEmergency) setEmergency(selectedEmergency);
    if (selectedLocation) setLocationFilter(selectedLocation);
  }, [location.state]);

  // 전체 요청 리스트 (원래는 API 응답 받아야 됨)
  const mockRequests = [
    { id: 1, date: "2025.07.29", address: "서울시 서대문구 신촌동", animal: "소", type: "일반" },
    { id: 2, date: "2025.07.29", address: "서울시 서대문구 홍은동", animal: "돼지", type: "긴급" },
    { id: 3, date: "2025.07.29", address: "경기도 수원시", animal: "소", type: "일반" },
  ];

  // 필터링 조건
  const filteredRequests = mockRequests.filter((req) => {
    const matchEmergency = emergency === "전체" || req.type === emergency;
    const matchLocation = locationFilter === "전체" || req.address.includes(locationFilter);
    return matchEmergency && matchLocation;
  });

  return (
    <div className="w-[375px] mx-auto min-h-screen bg-white font-suit px-[20px] pb-[88px]">
      <Header title="진료 요청" showBack onBack={() => navigate(-1)} />

      {/* 필터 버튼 */}
      <div className="flex gap-3 px-5 mb-4">
        <button
          className={`text-caption1 border rounded-full px-4 py-2 ${
            emergency !== "전체"
              ? "text-primary-blue border-primary-blue"
              : "text-greyscale-black border-greyscale-light"
          }`}
          onClick={() => navigate("/vet/home/vetrequest/emergency", { state: { selected: emergency } })}
        >
          {emergency === "전체" ? "긴급 여부" : emergency}
        </button>

        <button
          className={`text-caption1 border rounded-full px-4 py-2 ${
            locationFilter !== "전체"
              ? "text-primary-blue border-primary-blue"
              : "text-greyscale-black border-greyscale-light"
          }`}
          onClick={() => navigate("/vet/home/vetrequest/location", { state: { selected: locationFilter } })}
        >
          {locationFilter === "전체" ? "위치 설정" : locationFilter}
        </button>
      </div>

      {/* 요청 카드 리스트 */}
      <div className="flex flex-col gap-3 px-5">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((req) => (
            <div
              key={req.id}
              className="bg-greyscale-lightest rounded-lg p-4 shadow-sm flex justify-between items-start cursor-pointer"
              onClick={() => navigate(`/vet/request/${req.id}`)}
            >
              <div>
                <p className="text-caption1 text-greyscale-gray">{req.date}</p>
                <p className="text-body2 text-greyscale-black">{req.address}</p>
                <p className="text-button2 text-primary-blue mt-1">{req.animal}</p>
              </div>
              <span className="text-caption1 font-semibold text-white bg-secondary-emerald px-3 py-1 rounded-full">
                {req.type}
              </span>
            </div>
          ))
        ) : (
          <p className="text-caption1 text-center text-greyscale-gray">해당 조건에 맞는 요청이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
