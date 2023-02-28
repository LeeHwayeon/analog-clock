import { useState } from "react";
import "./Clock.css";
import Tooltip from "../Tooltip/Tooltip";

export default function Clock({ hours, minutes, seconds }) {
  // 60초 360도 = 1초당 360/60
  const secondsToDegrees = (seconds) => {
    return seconds * (360 / 60);
  };

  // 60분 360도 = 1분당 360/60 = 6 = 60초간 6도
  const minutesToDegrees = (minutes) => {
    return minutes * (360 / 60) + seconds * (6 / 60);
  };

  // 1시간당 360/12 = 30 = 60분에 30도
  const hoursToDegrees = (hours) => {
    return hours * (360 / 12) + minutes * (30 / 60);
  };

  const hourStyle = {
    transform: `rotate(${hoursToDegrees(hours)}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${minutesToDegrees(minutes)}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${secondsToDegrees(seconds)}deg)`,
  };

  // 마우스 포지션
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouseOver = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="clock">
      <div className="clock-face" onMouseMove={mouseOver}>
        <div className="hand hour-hand" style={hourStyle}></div>
        <div className="hand min-hand" style={minuteStyle}></div>
        <div className="hand second-hand" style={secondStyle}></div>
        <Tooltip
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          position={position}
        />
      </div>
    </div>
  );
}
