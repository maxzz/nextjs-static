import { HeaderButton } from '@/components/header-button';

export default function About() {
    return (<>
        <header className="mb-4 p-4 text-slate-300 bg-slate-700 flex items-center justify-between">
            <div className="text-2xl">
                About
            </div>

            <div className="space-x-2">
                <HeaderButton href=".." children="Back" />
            </div>
        </header>
    </>);
}
