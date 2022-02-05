import React, { FC } from 'react';

export interface CardProps {
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`container drop-shadow-2xl bg-gray-600 backdrop-blur-xl opacity-90 p-5 rounded-xl bg-opacity-100 backdrop-filter flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
