import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './themeToggle';

const mainNavItems = [
    ['Bakealongs', '/bakealongs'],
    ['Recipes', '/recipes']
];

export default function DesktopNav() {
    return (
        <nav className="bg-muted border-b">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <Link href='/' className='shrink-0'>
                    <Image
                        src="/pepoHappyChef.webp"
                        alt="website logo"
                        width={32}
                        height={32}
                    />
                </Link>

                <div className="flex items-center gap-6">
                    {mainNavItems.map(([name, link]) => (
                        <Link key={name} href={link}>
                            <Button variant="link" className="text-foreground cursor-pointer">
                                {name}
                            </Button>
                        </Link>
                    ))}

                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
