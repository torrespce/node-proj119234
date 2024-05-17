import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-5xl text-red-600 font-bold tracking-tighter">
          Łukasz Chęciński
        </p>
        <p className="text-2xl">Nr albumu: 119234</p>
        <Link href="/test">PAGE 2</Link>
      </div>
    </div>
  );
}
