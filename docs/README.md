# 우테코 최종테스트 - FE

## 미션 - 개발자 비상근무

### 구현 기능 목록
  - [x] 비상 근무를 배정할 월과 시작 요일 입력 받기
    - [x] (예외처리) ','로 구분된 2개의 문자인가
    - [x] (예외처리) 첫 요소는 정수이며 1~12월에 포함되는가
    - [x] (예외처리) 두번째 요소는 요일인가 (월 ~ 일)
    - [ ] 추가적인 예외?

  - [x] 평일 비상 근무 순번대로 사원 닉네임 입력하기
    - [x] (예외처리) 근무자의 닉네임이 최대 5자인가 (니코,포코,푸코,바바,해해해해해)
    - [x] (예외처리) 근무자의 닉네임이 중복되었는가
    - [x] (예외처리) 근무자의 수가 최소 5명인가
    - [x] (예외처리) 근무자의 수가 최대 35명을 넘지 않는가
    - (예외처리) 평일 1회씩 편성되었는가 (ex. 2회 혹은 0회는 안됨)
    - [x] (주의) 에러시 평일 순번부터 재입력

  - [x] 휴일 비상 근무 순번대로 사원 닉네임 입력하기
    - [x] (예외처리) 근무자의 닉네임이 최대 5자인가
    - [x] (예외처리) 근무자의 닉네임이 중복되었는가
    - [x] (예외처리) 근무자의 수가 최소 5명인가
    - [x] (예외처리) 근무자의 수가 최대 35명을 넘지 않는가
    - (예외처리) 휴일 1회씩 편성되었는가 (ex. 2회 혹은 0회는 안됨)
    - [x] (주의) 에러시 평일 순번부터 재입력

  - [x] 캘린더 만들기 (법정 공휴일 주의)
    - 연도는 고려하지 않는다
    - 매년 2월은 28일까지라고 가정한다
    - 휴일은 토, 일, 법정공휴일이다

  - [x] 비상 근무 순번 짜기
    - 평일근무 이후 연속 2일인 경우 다음 휴일 근무자와 순서를 바꾼다
    - 휴일근무 이후 연속 2일인 경우 다음 평일 근무자와 순서를 바꾼다
    - 순서를 바꿔야 하는 경우에는 앞의 날짜부터 순서를 변경해야한다.

  - [x] 비상 근무 순번표를 출력한다
    - 평일이면서 법정공휴일의 경우에만 요일 뒤에 `(휴일)`표기를 한다.


### 구현할 기능 순서

1. 유저는 월과 시작요일을 입력한다

   - 안내 문구 : `비상 근무를 배정할 월과 시작 요일을 입력하세요>`

2. 유저는 평일 비상 근무 순번대로 사원 닉네임을 입력한다

   - 안내 문구 : `평일 비상 근무 순번대로 사원 닉네임을 입력하세요>`

3. 유저는 휴일 비상 근무 순번대로 사원 닉네임을 입력한다

   - 안내 문구 : `휴일 비상 근무 순번대로 사원 닉네임을 입력하세요>`

4. 비상 근무 표를 만든 후, 출력한다

5. 모두 출력 후, 프로그램을 종료한다. 프로그램 동작 중 사용자가 잘못된 값을 입력한 경우 `[ERROR]` 문이 발생하며, 해당 입력을 다시 받는다. 특히, 평일 순번 혹은 휴일 순번의 입력 값이 올바르지 않은 경우, '평일 순번'부터 다시 입력 받는다.


### 주차별 요구사항

- 프리코스 요구 사항

  - [ ] InputView, OutputView 객체를 활용해 구현한다.
  - [ ] 객체를 객체스럽게, getter 메서드 체크하기.
  - [ ] 필드 수를 Map 구조를 통해 줄이기 - Discount 클래스
  - [ ] 성공 케이스 뿐만 아니라 예외 케이스도 테스트하기
  - [ ] indent 3 이상 넘지 않도록 함수, 메서드 분리하기
  - [ ] 함수(메서드) 길이가 15라인을 넘어가지 않도록 구현하기
  - [ ] ex) 함수에서 안내문구 출력, 사용자 입력, 유효값 검증 등 여러 일을 하면 분리
  - [ ] 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 이후 "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.
  - [ ] else를 지양하기. but, 상황에 따라 잘 판단하기
  - [ ] 도메인 로직에 단위 테스트를 구현하기. (단, UI 로직에 대한 단위 테스트는 제외)
  - [ ] jest 테스트 코드 작성하기
  - [ ] 상수들 변수화 하기
  - [ ] 폴더 구조 나눠보기
  - [ ] eslint, prettier 세팅 및 적용해보기


### 예외처리

- [ ] 


input test
평일 근무자 인풋 테스트 예외처리

validate 함수 분리, 중복 처리
work 이름에 숫자
