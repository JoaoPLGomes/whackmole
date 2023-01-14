import { INITIAL_STATE_ENGINE } from '@/contants/Engine';
import useTimer from '@/hooks/useTimer';
import React, { useEffect } from 'react';
import Mole from '../Mole/Mole';

const Engine = (): JSX.Element => {
  const { counter, setIsRunning, isRunning } = useTimer(120);
  const [moles, setMoles] = React.useState<Record<string, boolean>>(INITIAL_STATE_ENGINE);

  const onHammerDown = (key: string) => {
    if (moles[key] && isRunning) {
      setMoles({ ...moles, [key]: false });
    }
  };

  useEffect(() => {
    if (isRunning) {
      const randomKey = Object.keys(moles)[Math.floor(Math.random() * 12)];
      if (!moles[randomKey]) {
        setMoles({ ...moles, [randomKey]: true });
      }
    }
  }, [counter]);

  return (
    <div className="h-2/3 w-2/3 grid grid-cols-4 grid-rows-3 z-0">
      {Object.keys(moles).map((key) => (
        <Mole key={key} isUp={moles[key]} onHammerDown={() => onHammerDown(key)} setDown={() => setMoles({ ...moles, [key]: false })} />
      ))}
      {counter}
      <button onClick={() => setIsRunning(!isRunning)}></button>
    </div>
  );
};

export default Engine;
