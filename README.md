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
├── routes/            # 라우팅 파일
├── stores/            # 상태 관리
├── services/          # API 요청 함수
├── types/             # TypeScript 타입 정의
├── utils/             # 유틸 함수
├── styles/            # Tailwind 설정, 글로벌 CSS
├── App.tsx            # 라우팅 진입 파일
├── main.tsx           # React 엔트리 파일
└── index.css          # 글로벌 CSS
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
