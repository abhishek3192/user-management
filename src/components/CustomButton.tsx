import React, { ReactNode } from 'react';

interface CustomButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
};

export default CustomButton;
