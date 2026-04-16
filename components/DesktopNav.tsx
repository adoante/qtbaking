import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

const mainNavItems = [
    ['Home', '/'],
    ['Bakealongs', '/bakealongs'],
    ['Recipes', '/recipes']
];

export default function DesktopNav() {
    return (
        <nav className="bg-muted">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <Link href='/'>
                    <Image
                        src="/pepoHappyChef.webp"
                        alt="website logo"
                        width={32}
                        height={32}
                    />
                </Link>

                <div className="flex items-center gap-6">
                    {mainNavItems.map(([name, link]) => (
                        <Button
                            key={name}
                            variant="link"
                            className="text-foreground cursor-pointer"
                        >
                            <Link href={link}>{name}</Link>
                        </Button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
