import React from 'react';
import { useNavigate } from "react-router-dom";

type BotaoProps = {
    typeButton?: "button" | "submit" | "reset";
    children: React.ReactNode;
    routeButton: string;
};

export default function Button({ typeButton = "button", children, routeButton }: BotaoProps) {
  const history = useNavigate();
  const handleClick = () => {
    history(routeButton);
  };

  return (
    <button 
    className='w-auto m-2 p-3 rounded-lg font-bold whitespace-nowrap border border-customColorBlue hover:border-customColorPurple'
    type={typeButton}
    onClick={handleClick}>
      {children}
    </button>
  )
}