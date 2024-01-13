import Link from 'next/link';
import React from 'react';

export default function page() {
    return (<>
        <header className="mb-4 p-4 text-slate-300 bg-slate-700 flex items-center justify-between">
            <div className="text-2xl">
                Breeding
            </div>

            <div className="space-x-2">
                <Link href=".." className="px-3 py-2 hover:bg-slate-600 focus-within:bg-slate-600 border-slate-300 border rounded outline-none">
                    Back
                </Link>
            </div>
        </header>
    </>
    );
}
