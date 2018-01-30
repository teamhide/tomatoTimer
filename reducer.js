// import 필요한 것을 불러오고

// Actions 액션을 정의
// 나중에 switch문에서 사용할 변수를 정의한다
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';


// Action Creators
// 모든 Creator는 function 기반이다.
function startTimer() {
  return {
    type: START_TIMER
  }
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  }
}

function addSecond() {
  return {
    type: ADD_SECOND
  }
}

// reducer
// 리듀서는 function일 뿐이다.
const TIME_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIME_DURATION
}
// action을 보낼때마다 리덕스는 자동으로 리듀서를 실행한다.
// 리덕스는 자동으로 액션을 리듀서로 보낸다.
function reducer(state = initialState, action) { // state안주면 initialState를 디폴트로 가짐
  switch(action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
}

// Reducer Functions
function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
}

function applyRestartTimer(state, action) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state, action) {
  const { elapsedTime } = state;
  if (elapsedTime < TIME_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

// Export Action Creators
const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};
export { actionCreators };
// Export Reducer
export default reducer;
