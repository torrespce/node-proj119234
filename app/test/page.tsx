import Link from "next/link";
import Image from "next/image";

export default function Test() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-5xl text-orange-500 font-bold">Druga strona</p>
        <Link href="/">Strona główna</Link>
        <div className="py-8">
          <Image src="/beztytułu.jpg" alt="lodz" width={600} height={400} />
        </div>
      </div>
    </div>
  );
}
