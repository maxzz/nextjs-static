import Link from "next/link";

export default function Home() {
    return (
        <>
            <header className="p-24 h-full bg-slate-700">
                <Link href="/about">
                    Page 2
                </Link>
            </header>

            <main className="p-24 h-full bg-slate-700">
                main
            </main>
        </>
    );
}
