import React from 'react';

interface MoleProps {
  isUp?: boolean;
  onHammerDown: () => void;
}

const Mole = ({ isUp = false, onHammerDown }: MoleProps): JSX.Element => {
  return (
    <div className="flex justify-center items-center" onClick={onHammerDown}>
      <img src={isUp ? '/WAM_Mole.png' : '/WAM_Hole.png'}></img>
    </div>
  );
};

export default Mole;
