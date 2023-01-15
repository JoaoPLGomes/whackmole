import React from 'react';

interface MoleModalProps {
  children: React.ReactNode;
}

const MoleModal = ({ children }: MoleModalProps) => {
  return (
    <div className="absolute bg-stone-800 text-white w-fit h-fit p-8 z-10 rounded-xl text-center flex flex-col gap-4 cursor-default">
      {children}
    </div>
  );
};

export default MoleModal;
