import { HeaderButton } from "@/components/header-button";

export default function Home() {
    return (<>
        <header className="mb-4 p-4 text-slate-300 bg-slate-700 border-slate-600 border-b flex items-center justify-between">
            <div className="text-2xl">
                Next.js Static
            </div>

            <div className="space-x-2">
                <HeaderButton href="/about" children="About" />
                <HeaderButton href="/breeding" children="Breeding" />
            </div>
        </header>

        <main className="p-24 h-full bg-slate-700/50">
            main
        </main>
    </>);
}
