export default function H2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className="text-2xl pb-4 text-slate-600">{children}</h1>;
}
