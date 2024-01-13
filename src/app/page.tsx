import Link from "next/link";

export default function Home() {
    return (<>
        <header className="mb-4 p-4 text-slate-300 bg-slate-700 flex items-center justify-between">
            <div className="text-2xl">
                Next.js Static
            </div>

            <div className="space-x-2">
                <Link href="/about" className="px-3 py-2 hover:bg-slate-600 focus-within:bg-slate-600 border-slate-300 border rounded outline-none">
                    About
                </Link>
                <Link href="/breeding" className="px-3 py-2 hover:bg-slate-600 focus-within:bg-slate-600 border-slate-300 border rounded outline-none">
                    Breeding
                </Link>
            </div>
        </header>

        <main className="p-24 h-full bg-slate-700">
            main
        </main>
    </>);
}
