# 팅커벨 (TinkerBell)
> 부동산 계약 안전 도우미 서비스

### Key Features Implementation

#### 1. 체크리스트 시스템
- 단계별 맞춤 체크리스트 제공
  - 계약 전: 중개사 확인, 매물 확인, 임대인 확인
  - 계약 중: 계약서 검토, 특약 확인, 요금 확인
  - 계약 후: 신청사항, 보관사항 확인
  - 입주 전/중/후: 각종 확인사항 및 증거자료 관리

#### 2. AI 계약서 분석 시스템
- OCR 처리 워크플로우:
  ```
  1. 사전 체크리스트 작성
  2. 계약서 본문 업로드
  3. API 엔드포인트 호출
  4. Spring에서 데이터 파싱
  5. AI 분석 실행 및 결과 반환
  ```

- 평가 기준 (90점 만점):
  - 기본 정보 정확성: 20점
  - 법적 효력: 18점
  - 특약 사항 완성도: 15점
  - 항목 권리 적법성: 14점
  - 기타 중요 조항: 13점

#### 3. 증거자료 관리 시스템
- UUID 기반 사진 관리
- 단계별 사진 저장 및 조회 기능
- 계약 전/중/후 상태 기록

### Technical Stack

#### Frontend
```javascript
// React 컴포넌트 예시
const ChecklistComponent = () => {
  const [checkItems, setCheckItems] = useState([]);
  const [images, setImages] = useState([]);
  
  // 체크리스트 상태 관리
  // 이미지 업로드 처리
  // API 호출 로직
};
```

#### Backend
- AWS Lambda Functions
- Spring Boot AI Starter 활용
- 데이터 저장 및 분석 파이프라인

```java
// Spring Boot AI 구현 예시
@Service
public class ContractAnalysisService {
    private final AI ai;
    
    public AnalysisResult analyzeContract(String content) {
        // AI 분석 로직
    }
}
```

### Development Guidelines

#### 1. API 구현 원칙
- 로그인 기능 제외 (보안 이슈 방지)
- 일관된 AI 분석 결과 보장
- RESTful API 설계

#### 2. 데이터 처리 원칙
- UUID 기반 자료 관리
- 단계별 데이터 정규화
- 이미지 최적화 처리

#### 3. UI/UX 가이드라인
- 단계별 직관적 인터페이스
- 사용자 친화적 에러 처리
- 반응형 디자인 적용

## 🚀 Quick Start

1. 저장소 클론
```bash
git clone https://github.com/YourUsername/WhatAbout.git
```

2. 종속성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm start
```

## 📝 Development Notes

### 주의사항
- AI 분석 결과의 일관성 유지
- 데이터 정규화 준수
- 사용자 데이터 보안 관리

### 향후 개선사항
- AI 모델 정확도 향상
- 사용자 피드백 시스템 구현
- 실시간 알림 기능 추가

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License

---
© 2024 Team YeoGeuWater. All Rights Reserved.
