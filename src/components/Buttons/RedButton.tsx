import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  addClass: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function RedButton({ children, addClass, onClick }: Readonly<ButtonProps>) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={`bg-red-600 text-slate-50 flex items-center justify-center ${addClass} hover:bg-gradient-to-tl hover:from-red-700 hover:to-red-600`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
