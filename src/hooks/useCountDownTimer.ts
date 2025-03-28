import {useEffect, useRef, useState} from 'react';
const TIME_DEFAULT = 45;
export const useCountDownTimer = () => {
  const [timer, setTimer] = useState(TIME_DEFAULT);
  const [isTimeout, setIsTimeout] = useState(false);

  const timerId = useRef<number>(TIME_DEFAULT);

  useEffect(() => {
    timerId.current = Date.now() + TIME_DEFAULT * 1000;
  }, []);
  const handleSetAgain = () => {
    setTimer(TIME_DEFAULT);
    setIsTimeout(false);
    timerId.current = Date.now() + TIME_DEFAULT * 1000;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTimer(timerId.current - now);
    }, 100);
    if (timer <= 0) {
      setIsTimeout(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [setIsTimeout, isTimeout, timer]);
  return {timer, isTimeout, handleSetAgain};
};
