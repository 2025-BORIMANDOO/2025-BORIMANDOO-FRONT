import { useEffect } from 'react';

function App() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}/healthcheck`)
      .then(res => {
        if (res.ok) {
          console.log('서버 응답 OK (200)');
          return res.json();
        } else {
          console.error('서버 응답 오류:', res.status);
        }
      })
      .then(data => console.log('받은 데이터:', data))
      .catch(err => console.error('네트워크 에러:', err));
  }, [apiBaseUrl]);  // apiBaseUrl 바뀔 때마다 실행(보통 한 번만 실행됨)

  return (
    <div className="bg-purple-500 text-white p-6 rounded-lg min-h-screen flex flex-col items-center justify-center font-suit">
      <h1 className="text-3xl font-extrabold mb-4">Tailwind CSS + SUIT 폰트 적용 성공!</h1>
      <p className="text-body1 font-regular">API Base URL:</p>
      <code className="bg-gray-800 p-2 rounded mt-2">{apiBaseUrl}</code>
    </div>
  );
}

export default App;
