import { getPostBySlug } from "@/lib/api";

type ThoughtPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Thoughts({ params }: ThoughtPageProps) {
  const { slug } = await params;
  const thought = await getPostBySlug(slug);
  return <div dangerouslySetInnerHTML={{ __html: thought.content }} />;
}
