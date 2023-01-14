import React from 'react';

interface TopMenuProps {
  counter: number;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  playerScore: number;
}

const TopMenu = ({ counter, isRunning, setIsRunning, playerScore }: TopMenuProps): JSX.Element => {
  return (
    <div className="w-full absolute top-0 p-4 flex justify-between">
      <p className=" text-4xl text-white">{counter}</p>
      {isRunning && <button onClick={() => setIsRunning(!isRunning)}>Pause</button>}
      <p className="text-4xl text-white">Score : {playerScore}</p>
    </div>
  );
};

export default TopMenu;
