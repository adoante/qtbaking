import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './themeToggle';

const mainNavItems = [
    ['Bakealongs', '/bakealongs'],
    ['Recipes', '/recipes'],
    ['Privacy Policy', '/privacy-policy']
];

export default function Footer() {
    return (
        <footer className="bg-muted border-t mt-10">
            <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left: Logo + text */}
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image
                            src="/pepoHappyChef.webp"
                            alt="website logo"
                            width={32}
                            height={32}
                        />
                    </Link>
                </div>

                {/* Center: Links */}
                <div className="flex items-center gap-6">
                    {mainNavItems.map(([name, link]) => (
                        <Link key={name} href={link}>
                            <Button variant="link" className="text-foreground cursor-pointer">
                                {name}
                            </Button>
                        </Link>
                    ))}
                </div>

                {/* Right: Theme toggle */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                </div>
            </div>

            {/* Bottom strip */}
            <div className="text-center text-sm text-muted-foreground pb-4">
                {new Date().getFullYear()} QT Bakealong Archive 🍪 <a className="text-foreground hover:underline underline-offset-4" href="https://adolfogante.com">adoante</a>
            </div>
        </footer>
    );
}
