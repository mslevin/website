"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segments = useSelectedLayoutSegments();
  console.log(segments);
  return (
    <div className="flex flex-col gap-4 justify-center w-[90%] mx-auto">
      <div>
        <Link href="/" className="">
          home
        </Link>
        {segments.map((segment) => (
          <>
            {" - "}
            <Link href={`/${segment}`} className="" key={segment}>
              {segment.replace("_", " ")}
            </Link>
          </>
        ))}
      </div>
      {children}
    </div>
  );
}
