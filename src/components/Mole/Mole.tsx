import React from 'react';

interface MoleProps {
  isUp?: boolean;
}

const Mole = ({ isUp = false }: MoleProps): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <img src={isUp ? '/WAM_Mole.png' : '/WAM_Hole.png'}></img>
    </div>
  );
};

export default Mole;
