import { INITIAL_STATE_ENGINE, INITIAL_TIMER } from '@/contants/Engine';
import useTimer from '@/hooks/useTimer';
import React, { useEffect } from 'react';
import MenuModal from '../MenuModal/MenuModal';
import Mole from '../Mole/Mole';
import TopMenu from './TopMenu';

const Engine = (): JSX.Element => {
  const { counter, setIsRunning, isRunning, resetTimer } = useTimer(INITIAL_TIMER);
  const [playerScore, setPlayerScore] = React.useState(0);
  const [moles, setMoles] = React.useState<Record<string, boolean>>(INITIAL_STATE_ENGINE);

  const onHammerDown = (key: string) => {
    if (moles[key] && isRunning) {
      setMoles({ ...moles, [key]: false });
      setPlayerScore(playerScore + 1);
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

  const handleResetGame = () => {
    setPlayerScore(0);
    setMoles(INITIAL_STATE_ENGINE);
    resetTimer();
  };

  return (
    <>
      {!isRunning && <MenuModal counter={counter} isRunning={isRunning} setIsRunning={setIsRunning} resetGame={handleResetGame} />}
      <TopMenu counter={counter} isRunning={isRunning} setIsRunning={setIsRunning} playerScore={playerScore} />
      <div className="h-2/3 w-2/3 grid grid-cols-4 grid-rows-3 z-0">
        {Object.keys(moles).map((key) => (
          <Mole
            key={key}
            isUp={moles[key]}
            onHammerDown={() => onHammerDown(key)}
            setDown={() => setMoles((moles) => ({ ...moles, [key]: false }))}
          />
        ))}
      </div>
    </>
  );
};

export default Engine;
