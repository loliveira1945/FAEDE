import React from 'react';
import { useNavigate } from "react-router-dom";

type BotaoProps = {
    typeButton?: "button" | "submit" | "reset";
    children: React.ReactNode;
    routeButton?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const buttonStyles = 'w-1/4 m-6 p-3 rounded-lg font-bold whitespace-nowrap border border-customColorPurple transition-colors duration-300 ease-in-out hover:bg-customColorPurple hover:bg-gradient-to-l hover:from-transparent hover:via-transparent hover:to-customColorPurple';

export default function Button({ typeButton = "button", children, routeButton, className = buttonStyles }: BotaoProps) {
  const history = useNavigate();
  const handleClick = () => {
    if(routeButton !== undefined) {
      history(routeButton);
    }
  };

  return (
    <button 
    className={className}
    type={typeButton}
    onClick={handleClick}>
      {children}
    </button>
  )
}