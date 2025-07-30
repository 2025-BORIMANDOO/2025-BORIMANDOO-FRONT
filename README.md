# 🐄 Medimo - Frontend

## 📌 프로젝트 소개

**Medimo(메디모)** 는 축산 농가와 대동물 수의사를 모바일로 연결해, 진료 호출부터 이력 관리, 예방접종 기록까지 통합 제공하는 **가축 전용 디지털 헬스케어 플랫폼**입니다.

본 레포지토리는 **프론트엔드 개발을 담당하는 저장소**입니다.

---

## 🚀 기술 스택

- **Frontend Framework:** React
- **Language:** JavaScript (JSX 기반)  
- **Styling:** Tailwind CSS
- **State Management:** Recoil (or Zustand)
- **API Communication:** Axios
- **Routing:** react-router-dom
---

## 📂 디렉토리 구조

```
bash
복사
편집
src/
├── assets/            # 정적 파일 (이미지, 아이콘)
├── components/        # Atomic Design 기반 공용 컴포넌트
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── common/
├── hooks/             # 커스텀 훅
├── pages/             # 페이지 컴포넌트
│   ├── Onboarding/
│   ├── Home/
│   ├── Request/
│   ├── History/
│   ├── MyPage/
│   └── Settings/
├── routes/            # 라우팅 관련 파일
├── stores/            # 상태 관리 (Recoil 등)
├── services/          # API 요청 함수
├── utils/             # 유틸 함수
├── styles/            # Tailwind 설정, 글로벌 CSS
├── App.jsx            # 라우팅 진입 파일
├── main.jsx           # React 엔트리 파일
└── index.css          # 글로벌 CSS
```


## 🛰️ 배포 링크

> 서비스 바로가기
👉 borimandoo.vercel.app

