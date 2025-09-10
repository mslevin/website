import Link from "next/link";

import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export default async function Thoughts() {
  const allThoughts = await getAllPosts();
  return (
    <section>
      {allThoughts.map((post) => (
        <div key={post.slug} className="flex gap-2 items-center">
          <Link href={`/thoughts/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
          <h3 className="text-sm">{post.date}</h3>
        </div>
      ))}
    </section>
  );
}

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Thoughts",
};
