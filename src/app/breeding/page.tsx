import { HeaderButton } from '@/components/header-button';

export default function page() {
    return (<>
        <header className="mb-4 p-4 text-slate-300 bg-slate-700 flex items-center justify-between">
            <div className="text-2xl">
                Breeding
            </div>

            <div className="space-x-2">
                <HeaderButton href=".." children="Back" />
            </div>
        </header>
    </>
    );
}
