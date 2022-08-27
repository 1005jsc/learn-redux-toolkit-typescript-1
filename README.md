# Learn Redux toolkit typescript

learn-redux-toolkit 을 타입스크립트로 바꿔보았다

리엑트 타입스크립트 할 줄 안다고 되는 것이 아니었다

공식사이트의 가이드라인을 따라만들었다

https://redux-toolkit.js.org/tutorials/typescript

아래 두가지를 설치하였다

따로 dev에 type을 설치할 필요 없었다 두가지 안에 타입스크립트 설정을 모두 지원해 주고 있었다

"@reduxjs/toolkit": "^1.8.4",
"react-redux": "^8.0.2",

## 추가사항

posts를 추가해서 createAsyncThunk 를 이용한 비동기 코드관리에 대한 내용을 추가했다

redux toolkit웹사이트에서도 example이 잘 나와있고 생활코딩 강의도 쉽고 좋으니 들어보면 바로 이해될것이다

### 해보다가 알아낸 점

extraReducers안에

state = 으로 상태관리하면 좀 안좋다
보니까 state = postsStatus.loading()하면 컴포넌트까지 바뀐 상황이 전달이 안되는 것 같다

되도록 state의 세부적인 곳까지 바꿔 주는게 좋은듯
state.loading = true 하니까 된다
