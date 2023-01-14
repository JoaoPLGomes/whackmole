import React, { useEffect } from "react";



const useTimer = (timer: number) => {
  const [isRunning, setIsRunning] = React.useState<boolean>(false);
  const [counter, setCounter] = React.useState<number>(timer);

  useEffect(() => {
    counter > 0 && isRunning && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      setIsRunning(false);
    }
  }, [counter, isRunning]);

  

  return ({
    counter,
    isRunning,
    setIsRunning,
    resetTimer: () => setCounter(timer),
  }
  )
}

export default useTimer;