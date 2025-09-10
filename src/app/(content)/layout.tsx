"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segments = useSelectedLayoutSegments();
  return (
    <div className="flex flex-col gap-4 justify-center mx-auto">
      <div className="flex">
        <Link href="/" className="">
          home
        </Link>
        {segments.map((segment, i) => (
          <div key={segment}>
            {" - "}
            {i === segments.length - 1 ? (
              <span>{segment}</span>
            ) : (
              <Link href={`/${segment}`} className="">
                {segment}
              </Link>
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
