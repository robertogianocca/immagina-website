import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  addClass: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, addClass, onClick }: Readonly<ButtonProps>) {
  return (
    <button
      className={`bg-stone-50 shadow-button rounded-md flex items-center justify-center ${addClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
