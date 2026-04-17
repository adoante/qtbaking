"use client";

import { useEffect, useMemo, useState } from "react";
import type { FullRecipe, Tag } from "lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { CaretUpDownIcon } from "@phosphor-icons/react";

export default function RecipesPage() {
    const [recipes, setRecipes] = useState<FullRecipe[] | null>(null);
    const [loading, setLoading] = useState(true);

    const [searchTitle, setSearchTitle] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const [allTags, setAllTags] = useState<Tag[]>([])
    const [match, setMatch] = useState("partial")
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const offset = (page - 1) * limit
    const safeRecipes = recipes ?? []

    const fetchURL = useMemo(() => {
        const params = new URLSearchParams()

        if (searchTitle.trim()) {
            params.set("title", searchTitle.trim())
        }

        tags.forEach((tag) => {
            params.append("tag", tag)
        });

        params.set("match", match)
        params.set("limit", String(limit))
        params.set("offset", String(offset))

        return `https://pepo.qtbaking.com/recipes?${params.toString()}`
    }, [searchTitle, tags, match, limit, offset])

    useEffect(() => {
        async function fetchRecipes() {
            try {
                setLoading(true);

                const res = await fetch(fetchURL)
                if (!res.ok) {
                    throw new Error("Failed to fetch recipes")
                }

                const data: FullRecipe[] = await res.json()
                setRecipes(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        async function fetchTags() {
            try {
                setLoading(true);

                const res = await fetch('https://pepo.qtbaking.com/tags')
                if (!res.ok) {
                    throw new Error("Failed to fetch tags")
                }

                const data: Tag[] = await res.json()
                setAllTags(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchRecipes();
        fetchTags();
    }, [fetchURL]);

    return (
        <main className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Recipes</h1>

            <Collapsible className="mb-5">
                <CollapsibleTrigger asChild>
                    <Button className="flex flex-row mx-auto gap-10" variant="outline">
                        Select Tags
                        <CaretUpDownIcon />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {/* chat gippity */}
                    <div className="flex flex-wrap gap-2 my-5">
                        {[
                            ...new Map((allTags ?? []).map((t) => [t.tag, t])).values(),
                        ].map((tag) => (
                            <Badge
                                key={tag.tag}
                                onClick={() =>
                                    setTags((prev) =>
                                        prev.includes(tag.tag) ? prev : [...prev, tag.tag]
                                    )
                                }
                                className="cursor-pointer"
                            >
                                {tag.tag}
                            </Badge>
                        ))}
                    </div>
                </CollapsibleContent>
            </Collapsible>

            <Field orientation="horizontal" className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-row gap-4 w-full">
                    <Input
                        type="search"
                        placeholder="Search title..."
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-row gap-4">
                    <Select
                        value={match}
                        onValueChange={(value) => {
                            setMatch(value);
                            setPage(1);
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Match" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="exact">Exact</SelectItem>
                                <SelectItem value="partial">Partial</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select
                        value={String(limit)}
                        onValueChange={(value) => {
                            setLimit(Number(value));
                            setPage(1);
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Recipes per page" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="15">15</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </Field>

            <div className="py-5 flex gap-2 flex-wrap">
                {(tags ?? []).map((tag) => (
                    <Badge
                        variant="destructive"
                        key={tag}
                        onClick={() =>
                            setTags((prev) => prev.filter((t) => t !== tag))
                        }
                        className="cursor-pointer"
                    >
                        {tag}
                    </Badge>
                ))}
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {safeRecipes.map((recipe) => (
                            <div key={recipe.id} className="rounded-xl border p-4 bg-sidebar-accent">
                                <h2 className="text-xl font-semibold">
                                    {recipe.title.replaceAll("_", " ").replaceAll("duplicate", "").trim()}
                                </h2>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {(recipe.tags ?? []).map((tag) => (
                                        <Badge
                                            key={tag.id}
                                            onClick={() => setTags((prev) => [...prev, tag.tag])}
                                            className="cursor-pointer"
                                        >
                                            {tag.tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Pagination className="py-10">
                        <PaginationContent>
                            <PaginationItem>
                                <button
                                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                    disabled={page === 1}
                                >
                                    <PaginationPrevious />
                                </button>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink isActive>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <button
                                    onClick={() => setPage((p) => p + 1)}
                                    disabled={safeRecipes.length < limit}
                                >
                                    <PaginationNext />
                                </button>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </main>
    );
}
