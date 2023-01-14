import { INITIAL_TIMER } from '@/contants/Engine';
import React from 'react';
import MoleButton from '../shared/MoleButton';

interface MenuModalProps {
  counter: number;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  resetGame: () => void;
}

const MenuModal = ({ counter, isRunning, setIsRunning, resetGame }: MenuModalProps): JSX.Element => {
  return (
    <div className="absolute bg-stone-800 text-white w-fit h-fit p-8 z-10 rounded-xl text-center flex flex-col gap-4">
      <h1 className="text-4xl">Whack a Mole</h1>
      <MoleButton onClick={() => setIsRunning(!isRunning)}>{counter !== INITIAL_TIMER ? 'Continue' : 'Start'}</MoleButton>
      {counter !== INITIAL_TIMER && (
        <MoleButton onClick={resetGame} className="bg-stone-600 p-2 rounded-xl">
          Start new game
        </MoleButton>
      )}
      <MoleButton onClick={() => null}>Check Leaderboards</MoleButton>
    </div>
  );
};

export default MenuModal;
