import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home Page!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breakingnewsjalab?lang=en">Read in English</Link>
      <Link href="/articles/breakingnewsjalab?lang=kr">Read in Korean</Link>

      
    </>
  );
}
