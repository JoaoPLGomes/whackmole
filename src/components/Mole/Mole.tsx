import React, { useEffect } from 'react';

interface MoleProps {
  isUp?: boolean;
  onHammerDown: () => void;
  setDown: () => void;
}

const Mole = ({ isUp = false, onHammerDown, setDown }: MoleProps): JSX.Element => {
  useEffect(() => {
    if (isUp) {
      const timeout = setTimeout(() => {
        setDown();
      }, 500 + Math.random() * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isUp]);

  return (
    <div className="flex justify-center items-center" onClick={onHammerDown}>
      <img src={isUp ? '/WAM_Mole.png' : '/WAM_Hole.png'}></img>
    </div>
  );
};

export default React.memo(Mole);
