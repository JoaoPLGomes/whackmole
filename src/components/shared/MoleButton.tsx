import React from 'react';

interface MoleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const MoleButton = ({ children, ...props }: MoleButtonProps) => {
  return (
    <button {...props} className="bg-stone-600 p-2 rounded-xl">
      {children}
    </button>
  );
};

export default MoleButton;
