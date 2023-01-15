import React from 'react';
import { supabase } from '@/lib/supabaseClient';
import MoleModal from '@/components/shared/MoleModal';
import MoleButton from '@/components/shared/MoleButton';
import { useRouter } from 'next/router';

const LeaderboardPage = ({ leaderboard }: any) => {
  const router = useRouter();
  return (
    <MoleModal>
      <h1 className="text-4xl">Leaderboard</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-2xl">Name</th>
            <th className="text-2xl">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length > 0 ? (
            leaderboard
              .sort((a: any, b: any) => b.score - a.score)
              .slice(0, 10)
              .map((entry: any) => (
                <tr key={entry.id}>
                  <td className="text-2xl">{entry.name}</td>
                  <td className="text-2xl" data-testid="score">
                    {entry.score}
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td className="text-2xl">No scores yet</td>
            </tr>
          )}
        </tbody>
      </table>
      <MoleButton onClick={() => router.push('/')}>Back to game</MoleButton>
    </MoleModal>
  );
};

export async function getServerSideProps() {
  let { data } = await supabase.from('Leaderboard').select();

  return {
    props: {
      leaderboard: data,
    },
  };
}

export default LeaderboardPage;
