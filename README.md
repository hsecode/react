# study_react

# [기초 노트 (누구든지 하는 리액트: 초심자를 위한 react 핵심 강좌)]
## 기초

### React?
- 계속해서 업데이트되는 대규모 정보에 효율적으로 대응하기 위해 사용. 돔 전체를 새로 그리지 않고, 기존에 있던 가상의 돔과 업데이트 되는 정보를 비교해서 달라지는 부분만 새로 그린다.
- 즉, 변화가 일어나면 실제 브라우저의 돔에 새로운 것을 넣는 것이 아니라, 자바스크립트로 이루어진 가상의 돔(Virtual DOM)에 한번 랜더링 하고,
- 기존의 돔과 비교한 다음에 정말 업데이트가 필요한 곳에만 업데이트를 한다.
- 참고 영상 : https://www.youtube.com/watch?v=muc2ZF0QIO4

### Why React?
- 사용하는 곳이 많다
- 한번 사용하면 좋아하게 된다 -> 관리, 유지보수가 편리해서 (컴포넌트로 관리할 수 있고, State, props 를 통한 데이터 관리가 편하니까..?)
- 자바스크립트 기반으로 새로운 언어를 익히지 않아도 된다

### React의 단점, 주의할 점
- 리액트는 지속적으로 정보가 업데이트되는 대규모 어플리케이션에 맞춰 만들어졌기 때문에 적절하게 사용해야한다.
- 이벤트성 페이지 등 정보 변화가 없는 화면의 경우 리액트를 사용하지 않는 것이 더 빠를 수 있다.
- 참고 : https://developerntraveler.tistory.com/51

## <a href="https://www.notion.so/831833dae2a848a080b030547e15e901?showMoveTo=true" target="_blank">환경 세팅</a>
- nvm / node js / yarn 설치

## JSX
- js로 변환되는 문법
- html과 비슷하지만 몇가지 규칙이 있다.
### 1. 태그가 꼭 닫혀야 한다. input 등은 셀프 클로징하여 닫는다. 

### 2. 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 한다. 이 과정에서 불필요한 div 태그가 생길 수 있다. 
- 그러한 상황엔 다음과 같이 <strong>Fragment</strong> 라는것을 사용하면 된다. (이 기능은 v16.2 에 도입되었다.)
- import React, { Component, Fragment } from 'react';

### 3. JSX 안에 자바스크립트 값 사용하기
- +) 변수 선언의 경우 : var - es6이후 사용하지 않음 (scope가 함수 단위) / const - 변하지 않는 값 , let - 유동적인 값 (scope가 블록 단위)

### 4. 조건부 렌더링
- JSX 내부에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용하거나, AND 연산자를 사용한다.
- 반면에 if 문을 사용 할 수는 없다. (사용하려면 <a href="https://developer.mozilla.org/ko/docs/Glossary/IIFE" target="_blank">IIFE</a>(즉시 실행 함수 표현) 을 사용해야 한다.)

### 5. style과 class
- style을 줄 때에는 캐멀방식을 사용한다. (ex. fontSize )
- class는 className 으로 사용한다.

### 6. 주석
- 태그 사이세 사용 가능 (ex. <h1 //주석 테스트> 리액트 </h1>
- 여러줄 주석은 {}로 감싸서 사용한다. (ex. {/* 주석 테스트 */} )

## Props & State (<a href="https://www.notion.so/Props-79fa90e46d7a435d8a98cc322f9f5e99" target="_blank">노션 필기 링크</a>)
- props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값이다. 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 는 없다.
반면에 state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다.
### 1.Props
- class형 컴포넌트 : 어떠한 기능이 있을 경우 사용
- 함수형 컴포넌트 : 특별한 기능 없이 어떠한 값을 그냥 받아와서 사용할 때 사용하며, 간단하므로 속도 최적화에 도움을 줄 수 있다.
- class형 컴포넌트와 함수형 컴포넌트의 차이 : state 와 LifeCycle 기능 여부

### 2.State
- 동적인 데이터를 다룰 때 사용
- state는 컴포넌트 내부에 있고, 컴포넌트 내부에서 바뀔 수 있는 값이다. 이 값이 바뀔때마다 컴포넌트는 리렌더링이 된다.
- 값을 바꿀 때에는 언제나 setState 함수를 사용해야 한다. setState를 사용하지 않으면 리렌더링을 하지 않기때문에 원하는 값이 나타나지 않는다.

### 3.Props와 State의 차이
- Props는 부모가 자식에게 넘겨주는 값, 읽기 전용 이고/ State는 자기 자신이 들고있는 값, 변경할 수 있다.
- 참고 : https://react-anyone.vlpt.us/04.html

## LifeCycle API
- LifeCycle API 는 컴포넌트가 브라우저에서 나타날때, 사라질때, 그리고 업데이트 될 때 호출되는 API 이다.

### 1. <a href="https://www.notion.so/958c0d1c2a004b139bad5d475a2cf01a" target="_blank">컴포넌트 초기 생성</a>
- constructor : 컴포넌트 생성자 함수. 컴포넌트가 새로 만들어질 때마다 이 함수가 호출.
- componentWillMount (v16.3 이후 사용되지 않음)
- componentDidMount : DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등

### 2. <a href="https://www.notion.so/6f4e4c34a1f84ccc87a702549112b578" target="_blank">컴포넌트 업데이트</a>
- componentWillReceiveProps (v16.3 이후 사용되지 않음)
- static getDerivedStateFromProps() : v16.3 이후에 만들어진 라이프사이클 API.  props 로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우에 사용.
- shouldComponentUpdate : 업데이트를 막아주는 함수
- componentWillUpdate (v16.3 이후 사용되지 않음)
- getSnapshotBeforeUpdate() : 컴포넌트가 업데이트되어 브라우저의 DOM에 반영되기 바로 직전에 호출되는 함수


### 3.  <a href="https://www.notion.so/d226b8c8f6754a509121611cd450e79a" target="_blank">컴포넌트 제거</a>
- componentWillUnmount : 컴포넌트가 더 이상 필요하지 않게 되면 단 하나의 API 가 호출된다.

### 4. <a href="https://www.notion.so/7311965e29bd45ada7c39eb1f0321c18" target="_blank">컴포넌트 에러발생</a>
- componentDidCatch : render 함수에서 에러가 발생한다면, 리액트 앱이 크래쉬 되어버린다. 그때 사용할 수 있는 함수.
- 에러가 발생한 컴포넌트의 부모 컴포넌트에서 실행한다.
