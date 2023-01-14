import React from 'react';
import Mole from '../Mole/Mole';

const Engine = (): JSX.Element => {
  return (
    <div className="h-2/3 w-2/3 grid grid-cols-4 grid-rows-3 z-0">
      <Mole isUp />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
      <Mole />
    </div>
  );
};

export default Engine;
