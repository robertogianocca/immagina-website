// HOME

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-8">IMMAGINA</h1>
      <div className="flex space-x-4">
        <Link href="/cultura" className="bg-blue-500 text-white px-4 py-2 rounded">
          Cultura
        </Link>
        <Link href="/impresa" className="bg-green-500 text-white px-4 py-2 rounded">
          Impresa
        </Link>
      </div>
    </div>
  );
}
