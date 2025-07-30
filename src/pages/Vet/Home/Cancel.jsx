// src/pages/Vet/Home/Cancel.jsx
import { useNavigate } from 'react-router-dom';

export default function Cancel() {
  const navigate = useNavigate();

  const handleCancel = () => {
    // 실제 취소 로직 구현 필요
    console.log('진료 취소 처리');
    navigate('/vet/home'); // 예시: 홈으로 이동
  };

  const handleGoBack = () => {
    navigate(-1); // 이전 화면으로
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[296px] rounded-[12px] bg-white px-[24px] py-[32px] flex flex-col items-center">
        <h2 className="text-label1 font-semibold text-greyscale-black mb-[12px]">정말 취소하시겠어요?</h2>
        <p className="text-body2 text-greyscale-darkgray text-center mb-[24px]">
          고의로 판단 되는 경우 서비스 이용에 <br /> 제한이 생길 수 있습니다.
        </p>
        <div className="flex gap-[10px] w-full">
          <button
            onClick={handleGoBack}
            className="flex-1 h-[48px] rounded-[8px] bg-greyscale-lightgray text-label1 font-medium text-greyscale-black"
          >
            다시 진료하기
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 h-[48px] rounded-[8px] bg-[#E56F6F] text-label1 font-medium text-white"
          >
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
}
