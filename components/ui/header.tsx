import Link from 'next/link'
import { Button } from './button';

const Header = () => {
    return (
        <header className="w-full bg-gray-100 fixed inset-x-0 top-0 z-50 py-5 border-b border-black items-center">
            <nav className="flex h-[30px] w-full items-center justify-between px-32">
                <h1 className="font-mono font-bold text-4xl">Forum</h1>
                <div className="flex items-center gap-6 text-sm tracking-wide">
                    <Link href="/posts/new" className="text-black transition hover:text-mainPink">Write</Link>
                    <Link href="/posts/new" className="text-black transition hover:text-mainPink">Sign in</Link>
                    <Button variant="default" size="sm" className="bg-mainPink hover:bg-darkPink rounded-xl py-4 px-4 text-sm">Get Started</Button>
                </div>
            </nav>
        </header>
    );
}

export default Header;