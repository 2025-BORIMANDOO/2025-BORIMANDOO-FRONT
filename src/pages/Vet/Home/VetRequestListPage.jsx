// src/pages/Vet/VetRequestListPage.jsx
import React, { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VetRequestCard from '../../components/vet/VetRequestCard';
import GNB from '../../components/common/GNB';
import axios from 'axios';

export default function VetRequestListPage() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [emergencyFilter, setEmergencyFilter] = useState('전체');
  const [locationFilter, setLocationFilter] = useState('전체');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/vet/requests`);
      setRequests(res.data);
    } catch (err) {
      console.error('진료 요청 불러오기 실패:', err);
    }
  };

  const filtered = requests.filter((item) => {
    const emMatch =
      emergencyFilter === '전체' ||
      (emergencyFilter === '긴급' && item.emergency) ||
      (emergencyFilter === '일반' && !item.emergency);
    const locMatch = locationFilter === '전체' || item.address.includes(locationFilter);
    return emMatch && locMatch;
  });

  return (
    <div className="w-[375px] mx-auto min-h-screen bg-white font-suit px-[20px] pb-[88px]">
      <div className="relative w-full flex items-center justify-center py-5">
        <button className="absolute left-0" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-h3 font-semibold">진료 요청</h1>
      </div>

      <div className="flex gap-3 mb-4">
        <select
          className="px-3 py-2 rounded-xl bg-[#F1F3F5] text-caption1 text-[#4F4F4F]"
          value={emergencyFilter}
          onChange={(e) => setEmergencyFilter(e.target.value)}
        >
          <option value="전체">긴급 여부</option>
          <option value="긴급">긴급</option>
          <option value="일반">일반</option>
        </select>
        <select
          className="px-3 py-2 rounded-xl bg-[#F1F3F5] text-caption1 text-[#4F4F4F]"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="전체">위치 설정</option>
          <option value="신촌동">신촌동</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((r) => (
          <VetRequestCard
            key={r.id}
            date={r.date}
            address={r.address}
            animal={r.animal}
            emergency={r.emergency}
          />
        ))}
      </div>

      <GNB />
    </div>
  );
}
