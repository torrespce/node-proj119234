import Link from "next/link";

export default function Home() {
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="tracking-tight font-bold text-5xl text-violet-950">ŁUKASZ CHĘCIŃSKI</h1>
                <p className="text-3xl">Nr albumu: 119234</p>

                <Link href="/new/new" className="text-2xl font-extrabold">Press (PAGE 2)</Link>
            </div>
        </main>
    );
}