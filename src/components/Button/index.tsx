import React from 'react';
import { useNavigate } from "react-router-dom";

type BotaoProps = {
    typeButton?: "button" | "submit" | "reset";
    children: React.ReactNode;
    routeButton?: string;
    className?: string;
};

export default function Button({ typeButton = "button", children, routeButton, className }: BotaoProps) {
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