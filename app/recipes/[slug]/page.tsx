"use client";

import { useEffect, useState } from "react";
import type { FullRecipe } from "lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { use } from 'react'
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

export default function RecipePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = use(params);

    const [recipe, setRecipe] = useState<FullRecipe | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecipe() {
            try {
                setLoading(true);

                const res = await fetch(`http://localhost:8080/recipes/${slug}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch recipe");
                }

                const data: FullRecipe = await res.json();
                setRecipe(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipe();
    }, [slug]);

    return (
        <main className="mx-auto max-w-5xl p-6">
            {loading ? (
                <p>Loading...</p>
            ) : !recipe ? (
                <p>Recipe not found.</p>
            ) : (
                <div className="space-y-8">
                    <section className="space-y-4">
                        <h1 className="text-3xl font-bold md:text-4xl">
                            {recipe.title.replaceAll("_", " ")}
                        </h1>

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
                    </section>

                    <section>
                        <div className="space-y-6">
                            <h2 className="text-lg font-semibold">Tools</h2>
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
                                            value={tool.name}
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
                                <h2 className="text-lg font-semibold">{component.name}</h2>

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
                        <div>
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
                        </div>
                    </section>

                </div>
            )}
        </main>
    );
}
