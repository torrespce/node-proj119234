import Link from "next/link";

export default function New() {
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="tracking-tight font-bold text-5xl text-violet-950">New Page</h1>
                <p className="text-3xl">This is a new page.</p>

                <Link href="/">
                    <a className="text-2xl font-extrabold">Go back to Home</a>
                </Link>
            </div>
        </main>
    );
}