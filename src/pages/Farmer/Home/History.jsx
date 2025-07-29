// src/pages/Farmer/Home/History.jsx
import React, { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import FarmRequestStatusCard from '../../../components/FarmRequestStatusCard';
import Header from '../../../components/Header';

export default function History() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/vet/my-requests`);
      setRequests(res.data);
    } catch (err) {
      console.error('요청 목록 불러오기 실패:', err);
    }
  };

  return (
    <div className="w-[375px] mx-auto min-h-screen bg-white font-suit pt-[60px] px-[20px] pb-[88px]">
    <Header title="진료 요청 목록" showBack onBack={() => navigate(-1)} />

      <div className="flex flex-col gap-3">
        {requests.map((item) => (
          <FarmRequestStatusCard
            key={item.id}
            date={item.date}
            status={item.status}
            doctor={item.doctor}
          />
        ))}
      </div>
    </div>
  );
}
