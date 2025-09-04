import Link from "next/link";

type Thing = {
  title: string;
  description?: string;
  link: string;
};

const things: Thing[] = [
  {
    title: "BMWs",
    description: "A showcase of the various BMWs I've owned over the years.",
    link: "/things/bmws",
  },
  {
    title: "Brainfuck interpreter",
    description: "Visualize brainfuck code execution",
    link: "/things/brainfuck",
  },
];

export default async function Things() {
  return (
    <div className="">
      <div className="pb-2">
        This is a collection of things- projects, explorations, examples, etc.
      </div>
      <ul>
        {things.map((thing) => (
          <li key={thing.title}>
            <Link href={thing.link}>{thing.title}</Link>
            {thing.description && (
              <div className="text-sm">{thing.description}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
