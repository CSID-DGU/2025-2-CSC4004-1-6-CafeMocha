# 무인 결제 보조 시스템

## 프로젝트 개요
YOLO 객체 탐지와 바코드 스캔을 통한 무인결제보조시스템으로, 스캔을 빠뜨린 물건이 없는지 확인할 수 있습니다.

## 팀 구성

| 구분 | 성명   | 역할                | 소속학과      | 이메일 |
|------|--------|---------------------|---------------|--------|
| 팀장 | 김시환 | AI        | 컴퓨터AI학부      |  |
| 팀원 | 김미정 | AI  | 컴퓨터AI학부         | zkrkalspfls3@naver.com |
| 팀원 | 이지우 | 웹 개발        | 수학과   | zzziwoo0120@naver.com |
| 팀원 | 문소현 | AI           | 컴퓨터AI학부         |  |
| 팀원 | 조혜림 | 웹 개발           | 융합보안학과         | johyerim@dgu.ac.kr |


## 기술 스택
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Barcode Scanner**: html5-qrcode
- **YOLO API**: Hugging Face Spaces (FastAPI)
- **Deployment**: Vercel (Serverless)


## 주요 기능

1. **YOLO 객체 탐지**
   - 카메라로 장바구니 사진 촬영
   - Hugging Face API를 통한 자동 상품 개수 탐지
   - 탐지 실패 시 수동 입력 기능

2. **바코드 스캔**
   - 웹 카메라를 통한 바코드 스캔
   - 상품 자동 등록 및 장바구니 관리
   - 수량 조절 기능

3. **개수 비교 및 결제**
   - YOLO 탐지 개수와 바코드 스캔 개수 비교
   - 개수 일치 시 결제 완료 처리

## 사용 흐름

1. **메인 페이지** (`/`)
   - "결제 시작하기" 버튼 클릭

2. **YOLO 스캔 페이지** (`/yolo-scan`)
   - 카메라 자동 시작
   - 장바구니 사진 촬영
   - YOLO API를 통한 상품 개수 자동 탐지
   - 탐지 실패 시 수동 입력 가능

3. **바코드 스캔 페이지** (`/barcode-scan`)
   - 바코드 스캔 시작
   - 상품 자동 등록 및 장바구니 표시
   - 수량 조절 기능
   - YOLO 탐지 개수와 비교

4. **결제 성공 페이지** (`/payment-success`)
   - 개수 일치 시 결제 완료 메시지 표시

## 프로젝트 화면
| 메인 홈 화면 | 객체탐지 화면 | 바코드 인식 화면 | 결제 성공 화면 |
| :---: | :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/3e26a350-5541-4988-a39a-201beb33fca3" width="300" /> | 
<img src="https://github.com/user-attachments/assets/c01e9038-937c-40da-b8ba-cde2809c7569" width="300" /> | 
<img src="https://github.com/user-attachments/assets/b200d260-1035-4968-bdf1-5133f3477940" width="300" /> | 
<img src="https://github.com/user-attachments/assets/6c131406-8bf1-460d-80f3-9c164d56a8cd" width="300" /> |



