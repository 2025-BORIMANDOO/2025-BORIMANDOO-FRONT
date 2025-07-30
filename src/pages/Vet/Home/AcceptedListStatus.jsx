// src/pages/Vet/Home/AcceptedListStatus.jsx
import { useNavigate } from 'react-router-dom';

const statusList = [
  { label: '접수 완료', value: 'received' },
  { label: '진료 대기 중', value: 'waiting' },
  { label: '진료 중', value: 'in_progress' },
  { label: '진료 완료', value: 'completed' },
];

export default function AcceptedListStatus() {
  const navigate = useNavigate();

  const handleSelect = (status) => {
    // 상태 선택 후 이전 페이지로 상태값 전달
    navigate(-1, { state: { selectedStatus: status } });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="absolute bottom-0 w-full max-w-mobile mx-auto bg-white rounded-t-[20px] px-[20px] pt-[24px] pb-[40px]">
        <h2 className="text-label1 font-semibold text-greyscale-black mb-[24px]">진료 상태 변경</h2>
        <ul className="flex flex-col gap-[16px]">
          {statusList.map((item) => (
            <li
              key={item.value}
              className="flex justify-between items-center text-label1 text-greyscale-black cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              <span>{item.label}</span>
              <img
                src="/icons/check-gray.svg" // 선택되었을 경우 check-blue.svg로 바꾸면 됨
                alt="선택 체크"
                className="w-[18px] h-[18px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
