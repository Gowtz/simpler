import { useEffect, useState } from "react";

export const usePomodoro = () => {
  const [time, setTime] = useState(0); // 5 sec
  const [selectTime, setSelectTime] = useState(0); 
  const [isProgress, setIsProgress] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isProgress) {
      const interval = setInterval(changeTime, 1000);

      return () => clearInterval(interval);
    }
  });

  useEffect(()=>(setTime(selectTime)),[selectTime])

  const changeTime = () => {
    if (isProgress) {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }
    if (time == 0) {
      setIsDone(true);
      setIsProgress(false);
    }
  };

  const handlePause=()=>{
      setIsDone(false);
      setIsProgress(prev => !prev);
  }
  const handleReset=()=>{
      setIsDone(false);
    setIsProgress(false)
    setTime(selectTime)

  }

  return {
    time,
    setTime,
    isProgress,
    setIsProgress,
    isDone,
    setIsDone,
    handlePause,
    selectTime,
    setSelectTime,
    handleReset
  };
};
