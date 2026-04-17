"use client";

import { useEffect, useState, use } from "react";
import type { Bakealong } from "lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group";

export default function BakealongPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);

    const [bakealong, setBakealong] = useState<Bakealong | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBakealong() {
            try {
                setLoading(true);

                const res = await fetch(`https://pepo.qtbaking.com/bakealongs/${slug}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch bakealong");
                }

                const data: Bakealong = await res.json();
                setBakealong(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchBakealong();
    }, [slug]);

    return (
        <main className="mx-auto max-w-5xl p-6">
            {loading ? (
                <p>Loading...</p>
            ) : !bakealong ? (
                <p>Bakealong not found.</p>
            ) : (
                <div className="space-y-8">

                    <section className="space-y-4">
                        <h1 className="text-3xl font-bold md:text-4xl">
                            {bakealong.vod_title.replaceAll("_", " ").trim()}
                        </h1>

                        <div className="text-sm text-muted-foreground">
                            {new Date(bakealong.created_at).toLocaleDateString()}
                        </div>

                        <div className="aspect-video w-full overflow-hidden rounded-xl border">
                            <iframe
                                src={bakealong.video_url}
                                title={bakealong.vod_title}
                                className="w-full h-full"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </section>

                    {(bakealong.recipes ?? []).map((recipe) => (
                        <section key={recipe.id} className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">
                                    {recipe.title.replaceAll("_", " ").replaceAll("duplicate", "").trim()}
                                </h2>

                                <div className="flex flex-wrap gap-2">
                                    {(recipe.tags ?? []).map((tag) => (
                                        <Badge key={tag.id}>{tag.tag}</Badge>
                                    ))}
                                </div>

                                {(recipe.temp_fahrenheit || recipe.temp_celsius) && (
                                    <div className="text-sm text-muted-foreground">
                                        {recipe.temp_fahrenheit && <span>{recipe.temp_fahrenheit}°F</span>}
                                        {recipe.temp_fahrenheit && recipe.temp_celsius && <span> / </span>}
                                        {recipe.temp_celsius && <span>{recipe.temp_celsius}°C</span>}
                                    </div>
                                )}
                            </div>

                            <section>
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold">Tools</h3>
                                    {(recipe.tools ?? []).length > 0 && (
                                        <ToggleGroup
                                            type="multiple"
                                            className="flex flex-col items-stretch gap-2 text-sm w-full"
                                            variant="outline"
                                            spacing={2}
                                            orientation="vertical"
                                        >
                                            {recipe.tools.map((tool) => (
                                                <ToggleGroupItem
                                                    value={String(tool.id)}
                                                    key={tool.id}
                                                    className="h-auto p-3 justify-start text-left"
                                                >
                                                    <span>{tool.name}</span>
                                                    {tool.optional && (
                                                        <span className="ml-2 text-muted-foreground">(optional)</span>
                                                    )}
                                                </ToggleGroupItem>
                                            ))}
                                        </ToggleGroup>
                                    )}
                                </div>
                            </section>

                            <section className="flex flex-col md:flex-row gap-10 justify-between">
                                {(recipe.components ?? []).map((component) => (
                                    <div key={component.id} className="space-y-3 w-full">
                                        <h3 className="text-lg font-semibold">{component.name}</h3>

                                        <ToggleGroup
                                            type="multiple"
                                            className="flex flex-col items-stretch gap-2 text-sm w-full"
                                            variant="outline"
                                            spacing={2}
                                        >
                                            {(component.ingredients ?? []).map((ingredient) => (
                                                <ToggleGroupItem
                                                    value={String(ingredient.id)}
                                                    key={ingredient.id}
                                                    className="h-auto p-3 justify-start text-left"
                                                >
                                                    <div>
                                                        <div className="font-medium">
                                                            {ingredient.name}
                                                            {ingredient.optional && (
                                                                <span className="ml-2 text-muted-foreground">(optional)</span>
                                                            )}
                                                        </div>

                                                        <div className="mt-1 text-muted-foreground">
                                                            {ingredient.quantity} {ingredient.unit}
                                                            {ingredient.metric_quantity && ingredient.metric_unit && (
                                                                <span>
                                                                    {" "}
                                                                    • {ingredient.metric_quantity} {ingredient.metric_unit}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {ingredient.notes && (
                                                            <p className="mt-2 text-sm text-muted-foreground">
                                                                {ingredient.notes}
                                                            </p>
                                                        )}
                                                    </div>
                                                </ToggleGroupItem>
                                            ))}
                                        </ToggleGroup>
                                    </div>
                                ))}
                            </section>

                            <section>
                                {(recipe.notes ?? []).length > 0 && (
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Notes</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc space-y-2 pl-5 text-sm">
                                                {recipe.notes.map((note) => (
                                                    <li key={note.id}>{note.note}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                )}
                            </section>
                        </section>
                    ))}
                </div>
            )}
        </main>
    );
}
