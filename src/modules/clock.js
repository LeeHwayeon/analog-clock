// 액션 타입
export const SET_TIME = "clock/SET_TIME";

// 액션 생성 함수
export const setTime = (hours, minutes, seconds) => {
  return {
    type: SET_TIME,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

// 초기 상태
const now = new Date();
const defaultTime = {
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
};

//리듀서
export default function clock(state = defaultTime, action) {
  switch (action.type) {
    // SET_TIME이 액션으로 들어올 경우 전달받은 시간으로 state 갱신
    case SET_TIME:
      return {
        hours: action.hours,
        minutes: action.minutes,
        seconds: action.seconds,
      };
    // default는 현재 시간
    default:
      return state;
  }
}
