import React, { FC } from 'react';

interface CardProps {
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`container drop-shadow-2xl bg-gray-800 p-5 rounded-xl bg-opacity-100 backdrop-filter backdrop-blur-lg flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
