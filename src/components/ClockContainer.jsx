import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Clock from "./Clock/Clock";
import { setTime } from "../modules/clock";

export default function ClockContainer() {
  const time = new Date();
  const [hours, setHours] = useState(time.getHours());
  const [minutes, setMinutes] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // 시간, 분, 초가 바뀔때 디스패치
    dispatch(setTime(hours, minutes, seconds));
  }, [hours, minutes, seconds]);

  return <Clock hours={hours} minutes={minutes} seconds={seconds} />;
}
