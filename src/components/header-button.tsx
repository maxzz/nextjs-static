import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

export function HeaderButton({ className, href, ...rest }: { href: string; } & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link
            className="px-3 py-2 hover:bg-slate-600 focus-within:bg-slate-600 border-slate-300 border rounded outline-none"
            href={href}
            {...rest}
        />
    );
}
