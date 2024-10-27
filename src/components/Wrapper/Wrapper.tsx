import OpacityAnimation from "../Animations/OpacityAnimation";

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OpacityAnimation addClass="">
      <main className="min-h-space mt-[60px] pt-4 xl:pt-8 px-4 lg:px-6 xl:pl-14 xl:pr-24 bg-customGrey">
        {children}
      </main>
    </OpacityAnimation>
  );
}
