# 💰 Budget App (가계부 앱)

React Native와 Expo를 사용한 깔끔하고 기능적인 개인 가계부 모바일 애플리케이션입니다.

## 📱 주요 화면

|                             홈 화면 (요약)                             |                          홈 화면 (최근 내역)                           |                                                 거래 내역                                                 |
| :--------------------------------------------------------------------: | :--------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| ![홈 화면1](//public/public/image/%ED%99%88%20%ED%99%94%EB%A9%B41.png) | ![홈 화면2](//public/public/image/%ED%99%88%20%ED%99%94%EB%A9%B42.png) | ![거래 내역 화면](//public/public/image/%EA%B1%B0%EB%9E%98%20%EB%82%B4%EC%97%AD%20%ED%99%94%EB%A9%B4.png) |

|                                                 거래 추가                                                 |                                    통계 (추세)                                    |                                  통계 (카테고리)                                  |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| ![거래 추가 화면](//public/public/image/%EA%B1%B0%EB%9E%98%20%EC%B6%94%EA%B0%80%20%ED%99%94%EB%A9%B4.png) | ![통계 화면1](//public/public/image/%ED%86%B5%EA%B3%84%20%ED%99%94%EB%A9%B41.png) | ![통계 화면2](//public/public/image/%ED%86%B5%EA%B3%84%20%ED%99%94%EB%A9%B42.png) |

---

## ✨ 주요 기능

- **거래 관리**: 수입 및 지출 내역을 간편하게 추가, 수정, 삭제할 수 있습니다.
- **반복 거래 시스템**: 매일, 매주, 매월, 매년 반복되는 고정 지출/수입을 자동으로 생성합니다.
- **상세 통계 및 시각화**:
  - 일별/월별 수입, 지출, 잔액 히트맵
  - 카테고리별 지출 금액 순위
- **데이터 관리**:
  - JSON 형식을 통한 데이터 내보내기 및 가져오기 (백업/복구)
  - 모든 데이터 초기화 기능
- **사용자 경험 개선**:
  - 부드러운 리스트 애니메이션
  - 직관적인 커스텀 숫자 키패드
  - Toast 알림 및 로딩 오버레이

---

## 🛠 기술 스택

- **Framework**: React Native 0.81.4 (Expo SDK 54)
- **Language**: TypeScript
- **State Management**: Zustand (with Persist middleware)
- **Navigation**: React Navigation (Bottom Tabs + Native Stack)
- **Database**: AsyncStorage (로컬 저장)
- **Date Handling**: dayjs
- **Charts**: react-native-gifted-charts
- **Icons**: @expo/vector-icons (Feather)

---

## 📂 프로젝트 구조

```
src/
├── screens/          # 주요 화면 (Home, Transactions, Statistics, Settings 등)
├── components/       # 재사용 가능한 UI 컴포넌트 (Toast, Loading, CategoryIcon 등)
├── navigation/       # 네비게이션 설정 (Root, BottomTab)
├── store/           # Zustand를 이용한 상태 관리 로직
├── utils/           # 통계 계산 및 반복 거래 생성 유틸리티
├── constants/       # 색상 및 카테고리 설정 상수
├── types/           # TypeScript 타입 정의
└── hooks/           # 커스텀 훅 (useToast 등)
```

---

## 🚀 시작하기

### 필수 요구사항

- Node.js
- npm 또는 yarn
- Expo Go 앱 (모바일 기기 실습 시)

### 설치 및 실행

1. **저장소 복제**

   ```bash
   git clone [repository-url]
   cd budget-app
   ```

2. **의존성 설치**

   ```bash
   npm install
   ```

3. **개발 서버 실행**

   ```bash
   npm start
   ```

   - `i`를 눌러 iOS 시뮬레이터에서 실행
   - `a`를 눌러 Android 에뮬레이터에서 실행
   - QR 코드를 스캔하여 실제 기기의 Expo Go에서 실행

---

## 📝 라이선스 및 개발 정보

- **개발자**: Lending kim - 클로드 코드를 활용한 바이브 코딩으로 개발
- **최종 업데이트**: 2025년 10월 26일
- **버전**: 1.0.0
