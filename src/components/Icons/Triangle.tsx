interface Props {
  addClass: string;
}

export default function Triangle({ addClass }: Props) {
  return (
    <div
      className={`pr-1 w-0 h-0 border-l-[19px] border-b-[19px] border-b-transparent border-t-transparent ${addClass}`}
    ></div>
  );
}
