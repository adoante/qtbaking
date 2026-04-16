import { Button } from './ui/button';
import Image from 'next/image';

const mainNavItems = ['Home', 'Bakealongs', 'Recipes'];

export default function DesktopNav() {
    return (
        <nav className="bg-muted">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <Image
                    src="/pepoHappyChef.webp"
                    alt="website logo"
                    width={32}
                    height={32}
                />

                <div className="flex items-center gap-6">
                    {mainNavItems.map((item) => (
                        <Button
                            key={item}
                            variant="link"
                            className="text-foreground cursor-pointer"
                        >
                            {item}
                        </Button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
