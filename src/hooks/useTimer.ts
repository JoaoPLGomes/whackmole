import React, { useEffect } from "react";



const useTimer = (timer: number) => {
  const [isRunning, setIsRunning] = React.useState<boolean>(true);
  const [counter, setCounter] = React.useState<number>(timer * 10);

  useEffect(() => {
    counter > 0 && isRunning && setTimeout(() => setCounter(counter - 1), 100);
  }, [counter, isRunning]);

  return ({
    counter,
    isRunning,
    setIsRunning,
  }
  )
}

export default useTimer;