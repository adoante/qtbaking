import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from 'next/image'
import Link from "next/link";

export default function Page() {
    return (
        <main className="max-w-7xl mx-auto px-4">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-10 md:py-16">
                <div className="relative w-75 h-75 shrink-0 overflow-hidden rounded-full">
                    <Image
                        src="/qt.jpg"
                        alt="picture of QTCinderella"
                        fill
                        className="object-cover dark:hidden"
                    />
                    <Image
                        src="/dark-qt.jpeg"
                        alt="picture of QTCinderella"
                        fill
                        className="hidden object-cover dark:block"
                    />
                </div>

                <div className="space-y-5 max-w-md">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        QTCinderella{`'`}s Bakealongs
                    </h1>
                    <p className="text-muted-foreground">
                        Bake along with QT! <br /> Every recipe and VOD in one convenient place.
                    </p>
                    <div className="flex items-center gap-4">
                        <Button
                            asChild
                            className="px-6 py-3 cursor-pointer"
                        >
                            <Link href="/bakealongs">
                                Find a Bakealong
                            </Link>
                        </Button>
                        <Button
                            variant="outline" className="px-6 py-3 cursor-pointer"
                            asChild
                        >
                            <Link href="/recipes">
                                Browse Recipes
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="md:py-16 py-10">
                <div className="flex flex-col gap-4 max-w-lg mx-auto">
                    <Card className="rounded-2xl">
                        <CardHeader>
                            <CardTitle>Bakealongs</CardTitle>
                            <CardDescription>
                                Follow along step-by-step with QT in real time.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="rounded-2xl">
                        <CardHeader>
                            <CardTitle>Recipes</CardTitle>
                            <CardDescription>
                                70+ recipes paired with their VODs.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="rounded-2xl">
                        <CardHeader>
                            <CardTitle>Search</CardTitle>
                            <CardDescription>
                                Quickly find bakealongs, VODs, and recipes.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </section>

            {/* About Section */}
            <section className="md:py-16 py-10">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold md:text-3xl text-center">
                        About This Project
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        This started from a community Google Doc that tracked all the
                        bakealongs and recipes in one place. I used that as a base, then
                        dug through past streams to match VODs with the right recipes,
                        fixed recipes and filled in missing recipes.
                    </p>

                    <p className="mt-4 text-muted-foreground">
                        The goal is simple: make it easy to jump into a bakealong or find
                        a recipe without digging through hours of content. No offense to
                        the QTCinderella VODs channel but its not the easiest to navigate
                        but it is an incredible resource.
                    </p>

                    <p className="mt-4 text-muted-foreground">
                        I’ll keep this updated with every new bakealong so it stays useful
                        for everyone.
                    </p>

                    <p className="mt-4 text-muted-foreground">
                        This project is open source. View the code on Github here:{" "}
                        <a href="https://github.com/adoante/qtbaking" className="underline">
                            Website Code
                        </a> | {" "}
                        <a href="https://github.com/adoante/qtbaking-api" className="underline">
                            API Code
                        </a>.
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="md:py-16 py-10">
                <div className="mx-auto max-w-2xl rounded-2xl bg-muted px-6 py-12 text-center">
                    <h2 className="text-2xl font-semibold md:text-3xl">
                        Ready to bake?
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                        Find a bakealong or recipe and get started.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Button
                            className="px-6 py-3 cursor-pointer"
                        >
                            <Link href="/bakealongs">
                                Find a Bakealong
                            </Link>
                        </Button>
                        <Button variant="outline" className="px-6 py-3 cursor-pointer">
                            <Link href="/recipes">
                                Browse Recipes
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
