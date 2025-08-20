import Link from "next/link";

import { getAllPosts } from "@/lib/api";

export default async function Thoughts() {
  const allThoughts = await getAllPosts();
  return (
    <div className="">
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
