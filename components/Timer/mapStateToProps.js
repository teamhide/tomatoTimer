import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions } from '../../reducer';

function mapStateToProps(state) { // 스토어에서 state를 복사해서 컨테이너의 props에 붙여넣는 함수
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  }
}

function mapDispatchToProps(dispatch) { // 디스패치는 액션을 리듀서로 보내는 함수
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
}

//export default mapStateToProps;
export { mapDispatchToProps, mapStateToProps };
