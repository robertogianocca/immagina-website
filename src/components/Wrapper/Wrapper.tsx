import OpacityAnimation from "../Animations/OpacityAnimation";
import { motion } from "framer-motion";

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OpacityAnimation delay={1}>
      <main className="min-h-space mt-[60px] pt-4 xl:pt-8 px-4 lg:px-6 xl:pl-14 xl:pr-24 bg-customGrey ">
        {/* <main className="min-h-[calc(100vh-60px)] mt-[60px] xl:pt-8 px-4 lg:px-6 xl:pl-14 xl:pr-24 bg-customGrey "> */}
        {children}
      </main>
    </OpacityAnimation>
  );
}
