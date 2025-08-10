"use client"

import Link from "next/link"
import { use } from "react";

export default  function NewsArticle({ 
    params, 
    searchParams 
}: {
    params: Promise<{ articleId: string}>;
    searchParams: Promise<{ lang?: "en" | "kr" | "jl"}>;
}) {
    const { articleId } =  use(params);
    const { lang="en" } =  use(searchParams);
    return <div>
        <h1>News Article {articleId}</h1>
        <p>Reading in language {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=kr`}>Korean</Link>
            <Link href={`/articles/${articleId}?lang=jl`}>Jalab</Link>
        </div>
    </div>
}