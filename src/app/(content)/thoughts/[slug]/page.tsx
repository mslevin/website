import { getPostBySlug } from "@/lib/api";
import { Metadata } from "next";
import { remark } from "remark";
import html from "remark-html";

type ThoughtPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Thoughts({ params }: ThoughtPageProps) {
  const { slug } = await params;
  const thought = await getPostBySlug(slug);
  const result = await remark().use(html).process(thought.content);
  return <div dangerouslySetInnerHTML={{ __html: result.toString() }} />;
}

export async function generateMetadata({ params }: ThoughtPageProps) {
  const { slug } = await params;
  const thought = await getPostBySlug(slug);
  return {
    title: thought.title,
  };
}
