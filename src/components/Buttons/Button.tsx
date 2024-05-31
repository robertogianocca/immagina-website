import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  addClass: string;
}

export default function Button({ children, addClass }: Readonly<ButtonProps>) {
  return (
    <button
      className={`bg-zinc-150 shadow-button rounded-md flex items-center justify-center ${addClass}`}
    >
      {children}
    </button>
  );
}
