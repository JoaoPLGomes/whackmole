import { INITIAL_TIMER } from '@/constants/Engine';
import React from 'react';
import MoleButton from '../shared/MoleButton';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/router';
import MoleModal from '../shared/MoleModal';

interface MenuModalProps {
  counter: number;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  resetGame: () => void;
  score: number;
}

const MenuModal = ({ counter, isRunning, setIsRunning, resetGame, score }: MenuModalProps): JSX.Element => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement)?.value;
    const { error } = await supabase.from('Leaderboard').insert([{ name, score }]);
    if (error) {
      console.log(error);
    }
    router.push('/leaderboard');
  };

  return (
    <MoleModal>
      <h1 className="text-4xl">Whack a Mole</h1>
      {counter === 0 ? (
        <>
          <p className="text-2xl">Your score is {score}</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="form">
            <input type="text" placeholder="Enter your name" className="bg-stone-600 p-2 rounded-xl" />
            <input type="submit" value="Submit" className="bg-stone-600 p-2 rounded-xl cursor-pointer" />
          </form>
        </>
      ) : (
        <>
          <MoleButton aria-label="Continue/Start" onClick={() => setIsRunning(!isRunning)}>
            {counter !== INITIAL_TIMER ? 'Continue' : 'Start'}
          </MoleButton>
          {counter !== INITIAL_TIMER && (
            <MoleButton onClick={resetGame} className="bg-stone-600 p-2 rounded-xl" aria-label="NewGame">
              Start new game
            </MoleButton>
          )}
          <MoleButton onClick={() => router.push('/leaderboard')}>Check Leaderboards</MoleButton>
        </>
      )}
    </MoleModal>
  );
};

export default MenuModal;
