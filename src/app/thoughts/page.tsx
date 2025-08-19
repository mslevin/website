import Link from "next/link";
import PostType from "@/types/post";
import { getAllPosts } from "@/lib/api";

export default async function Thoughts() {
  const allThoughts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  return (
    <div className="flex flex-col gap-4 justify-center w-[90%] mx-auto">
      <Link href="/" className="text-lg ">
        home
      </Link>
      {allThoughts.map((post) => (
        <div key={post.slug}>
          <div className="flex gap-2">
            <Link href={`/thoughts/${post.slug}`}>{post.title}</Link>{" "}
            <p>{post.date}</p>
          </div>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
